export type ClassType = {
    id: string,
    name: string,
    module: number
};

export type Hobby = {
    id: string,
    hobby: string
}

export type Id = {
    id: string
}

export type Student = {
    id: string,
    name: string,
    email: string,
    birth_date: string,
    class_id: string,
    hobby: string | null
}

export type FormatedStudent = {
    id: string,
    name: string,
    email: string,
    birthDate: string,
    classId: string,
    hobby: string[]
}

export type Specialty = {
    id: string,
    specialty: string
}