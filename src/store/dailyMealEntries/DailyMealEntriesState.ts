export default interface DailyMealEntriesState {
    map: DailyMealEntryMap;
}

export interface DailyMealEntryMap {
    [date: string]: string[];
}
