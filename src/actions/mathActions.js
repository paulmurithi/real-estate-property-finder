export function addNumber ( number ) {
    return {
        type: 'ADD',
        payload: number
    };

}

export function subtractNumber ( number ) {
    return {
        type: 'SUBSTRACT',
        payload: number
    };

}