import React, {useState} from 'react';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import {Textarea} from '@/components/ui/textarea';
import {Button} from '@/components/ui/button';
import {ControllerRenderProps, useForm} from 'react-hook-form';
import {Input} from '@/components/ui/input';
import {zodResolver} from '@hookform/resolvers/zod';
import {useTranslations} from 'next-intl';
import {z} from 'zod';
import {SendHorizonal} from 'lucide-react';
import Spinner from '@/svg/spinner.svg';
import {useToast} from '@/hooks/use-toast';
import axios from 'axios';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const t = useTranslations('Contact');
  const e = useTranslations('ErrorMessages');

  // Normally I'd separate this in a schema directory, but I'm having trouble setting the i18n interpolation
  // cuz I have no idea how to get the min/max values without making a giant workaround
  const messageSchema = z.object({
    name: z.string({required_error: e('required')}).trim().min(2, e('minString', {min: 2})).max(30, e('maxString', {max: 30})),
    email: z.string({required_error: e('required')}).email({message: e('invalidEmail')}),
    message: z.string({required_error: e('required')}).trim().min(10, e('minString', {min: 10})).max(1000, e('maxString', {max: 1000}))
  });

  const form = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema)
  });

  const onSubmit = async (data: z.infer<typeof messageSchema>) => {
    setLoading(true);

    await axios.post('https://formspree.io/f/mbllerww', {
      email: data.email,
      message: `Sent by: ${data.name}\n\n${data.message}`
    });

    setLoading(false);
    toast({
      title: t('success'),
      description: t('success-message'),
    })
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="name"
          render={({field}) => (
            <SimpleFormItem label={t('name')} placeholder={t('name-placeholder') + ' *'} field={field}/>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({field}) => (
            <SimpleFormItem label={t('email')} placeholder={t('email-placeholder') + ' *'} field={field} type="email"/>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({field}) => (
            <FormItem>
              <FormLabel>{t('message')}</FormLabel>
              <FormControl>
                <Textarea placeholder={t('message-placeholder') + ' *'} {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <Button type="submit" variant="secondary" disabled={loading}>
          {t('send')}
          {loading ? <Spinner/> : <SendHorizonal/>}

        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;

const SimpleFormItem = ({placeholder, label, field, type}: {
  placeholder: string;
  label: string;
  field: ControllerRenderProps<{ name: string, email: string, message: string }>;
  type?: React.HTMLInputTypeAttribute
}) => (
  <FormItem>
    <FormLabel>{label}</FormLabel>
    <FormControl>
      <Input placeholder={placeholder} {...field} type={type || 'text'}/>
    </FormControl>
    <FormMessage/>
  </FormItem>
);
