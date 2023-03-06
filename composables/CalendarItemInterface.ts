import { DateFromToInterface } from "@/composables/DateFromToInterface"

export interface CalendarItemInterface {
	description: string
	color: string
	dates: Date | Date[] | DateFromToInterface
}
