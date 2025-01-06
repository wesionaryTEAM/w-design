import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "./index";

const meta: Meta<typeof DatePicker> = {
  title: "Design System/Atoms/DatePicker",
  component: DatePicker,
  argTypes: {
    triggerButtonClassName: {
      description: "Classname for the datepicker trigger button",
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    prefixIcon: {
      description: "Icon to be displayed before the datepicker trigger button",
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: { type: "object" },
    },
    mode: {
      table: {
        type: { summary: "string" },
      },
      description: "Mode of the datepicker",
      control: {
        type: "select",
      },
      options: ["single", "multiple", "range"],
    },
    placeholder: {
      description: "Placeholder text for the datepicker",
      control: { type: "text" },
      table: {
        type: { summary: "React.ReactNode | string" },
      },
    },
    disabledDays: {
      table: {
        type: { summary: "Date[]" },
      },
      description: "Array of dates that should be disabled",
      control: { type: "object" },
    },
    selected: {
      table: {
        type: { summary: "Date | Date[]" },
      },
      description: "Selected date(s)",
      control: { type: "object" },
    },
    onSelect: {
      table: {
        type: { summary: "function" },
      },
      description: "Callback function when a date is selected",
      control: { type: "object" },
    },
    numberOfMonths: {
      description: "Number of months to be displayed in the datepicker",
      control: { type: "number" },
      table: {
        type: { summary: "number (1 - 12)" },
      },
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

export const MultpleMonthsView: Story = {
  args: {
    mode: "range",
    numberOfMonths: 2,
  },
};

export const DisabledDays: Story = {
  args: {
    mode: "single",
    disabledDays: [new Date()],
  },
  parameters: {
    docs: {
      description: { story: "Today's date is disabled" },
    },
  },
};

export const DisabledNavigation: Story = {
  args: {
    mode: "single",
    disableNavigation: true,
  },
  parameters: {
    docs: {
      description: { story: "Navigations are disabled and hidden" },
    },
  },
};

export const UsageInForm: Story = {
  parameters: {
    docs: {
      description: {
        story: `\`\`\`tsx
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
        \`\`\``,
      },
    },
  },
};
