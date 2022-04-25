export type ClassType = {
    id: string,
    name: string,
    module: number
};

export type ClassCompleteInfo = {
    id: string,
    name: string,
    module: number,
    studentsId: string | null,
    teachersId: string | null
};

export type FormatedClassCompleteInfo = {
    id: string,
    name: string,
    module: number,
    studentsId: string[],
    teachersId: string[]
};

export type Hobby = {
    id: string,
    hobby: string
};

export type Id = {
    id: string
};

export type Student = {
    id: string,
    name: string,
    email: string,
    birth_date: string,
    class_id: string,
    hobby: string | null
};

export type FormatedStudent = {
    id: string,
    name: string,
    email: string,
    birthDate: string,
    classId: string,
    hobby: string[]
};

export type Specialty = {
    id: string,
    specialty: string
};

export type Teacher = {
    id: string,
    name: string,
    email: string,
    birth_date: string,
    class_id: string,
    specialty: string
};

export type FormatedTeacher = {
    id: string,
    name: string,
    email: string,
    birthDate: string,
    classId: string,
    specialty: string[]
};