export function moneyFormat(amt: number) {
    return new Intl.NumberFormat("en-US", {
        notation:"compact",
        style: "currency",
        currency:"USD"
    }).format(amt)
}