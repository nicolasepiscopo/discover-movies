export interface FormatField {
    name: string
}

export function formatItem (item: any, formatFields: FormatField[] = []) {
    const formattedItem = {}

    formatFields.forEach((formatField: FormatField) => {
        formattedItem[formatField.name] = item[formatField.name]
    })

    return formattedItem
}