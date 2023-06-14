
type GroupByFn<T> = (item: T) => string | number;

export function groupBy<T>(array: T[], fn: GroupByFn<T>): Record<string | number, T[]> {
    return array.reduce((result, item) => {
        const key = fn(item);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {} as Record<string | number, T[]>);
}
