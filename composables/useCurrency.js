export const useCurrency = (amount) => {
    const currency = computed(() => {
        return new Intl.NumberFormat('ru-IN', {
            style: 'currency',
            currency: 'RUB'
        }).format(isRef(amount) ? amount.value : amount)
    })
    return {
        currency
    }
}
