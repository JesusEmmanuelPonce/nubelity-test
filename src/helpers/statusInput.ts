const statusInput = (status: number) => {
    switch (status) {
        case 0: 
            return ""

        case 1: 
            return "error"

        case 2: 
            return "success"

        default: 
            return ""
    }
}

export default statusInput