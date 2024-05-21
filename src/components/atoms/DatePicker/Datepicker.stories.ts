import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "./index";

const meta: Meta<typeof DatePicker> = {
  title: "Design System/Atoms/DatePicker",
  component: DatePicker,
  argTypes: {
    triggerButtonClassName: {
      description: "Classname for the datepicker trigger button",
    },
    prefixIcon: {
      description: "Icon to be displayed before the datepicker trigger button",
    },
    mode: {
      description: "Mode of the datepicker",
      defaultValue: "",
      control: {
        type: "select",
      },
      options: ["single", "multiple", "range"],
    },
    placeholder: {
      description: "Placeholder text for the datepicker",
      control: { type: "text" },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const SingleDatePicker: Story = {
  args: {
    mode: "single",
  },
};

export const MultipleDatePicker: Story = {
  args: {
    mode: "multiple",
  },
};

export const RangeDatePicker: Story = {
  args: {
    mode: "range",
  },
};

export const UsageInForm: Story = {
  parameters: {
    docs: {
      source: {
        of: "",
        language: "tsx",
        code: `
        const FormSchema = z.object({
          single: z.date({
            required_error: "Please select a date.",
          }),
          range: z.object({
            from: z.date({ required_error: "A initial date is required." }),
            to: z.date({ required_error: "A end date is required." }),
          }),
          multiple: z.array(z.date({ required_error: "A date is required." })),
        });
        
        export function DatePickerForm() {
          const form = useForm<z.infer<typeof FormSchema>>({
            resolver: zodResolver(FormSchema),
          });
        
          function onSubmit(data: z.infer<typeof FormSchema>) {
            console.log("data", data);
          }
          return (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='mt-12 space-y-8'>
                <FormField
                  control={form.control}
                  name='single'
                  render={({ field }) => (
                    <FormItem className='flex flex-col items-center justify-center'>
                      <FormLabel>Select Single Date</FormLabel>
                      <FormControl>
                        <DatePicker
                          placeholder='ok'
                          mode='single'
                          onSelect={field.onChange}
                          selected={field.value}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='range'
                  render={({ field }) => (
                    <FormItem className='flex flex-col items-center justify-center'>
                      <FormLabel>Select a range</FormLabel>
                      <FormControl>
                        <DatePicker
                          mode='range'
                          onSelect={field.onChange}
                          selected={field.value}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='multiple'
                  render={({ field }) => (
                    <FormItem className='flex flex-col items-center justify-center'>
                      <FormLabel>Select Multiple Dates</FormLabel>
                      <FormControl>
                        <DatePicker
                          mode='multiple'
                          onSelect={field.onChange}
                          selected={field.value}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <button type='submit'>
                  Submit
                </button>
              </form>
            </Form>
          );
        }
        `,
      },
    },
  },
};
