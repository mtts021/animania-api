interface adminProps {
    id: number
    email: string
    password: string
}

export default class Admin {
    props: adminProps;
    constructor(props: adminProps,) {
        this.props = {...props};
    }

    get id(): number {
        return this.props.id;
    }

    set id(id: number) {
        this.props.id = id;
    }

    get email(): string {
        return this.props.email;
    }

    
    set  email(email : string) {
        this.props.email = email;
    }

    get password(): string {
        return this.props.password;
    }

    set password(password: string) {
        this.props.password = password;
    }
}