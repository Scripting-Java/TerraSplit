export function moneyFormat(amt: number) {
    return new Intl.NumberFormat("en-US", {
        notation:"compact",
        style: "currency",
        currency:"USD",
        minimumFractionDigits:2,
        maximumFractionDigits:2
    }).format(amt)
}