import {accountingEvent} from "./enums";

export type dailyRevenue = { day: string, takings: number };
export type paymentHistory = { event: accountingEvent, amount: number };