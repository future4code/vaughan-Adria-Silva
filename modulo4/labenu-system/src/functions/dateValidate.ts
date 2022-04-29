export const dateFormatValidate = (date: string): void => {
    const formatCondition1: boolean = date.length !== 10 || date[2] !== "/" || date[5] !== "/";
    if (formatCondition1) {
        throw new Error("Birth date is not in the requested format: DD / MM / AAAA");
    };

    const splitDate = date.split("/");

    const day: number = Number(splitDate[0]);
    const month: number = Number(splitDate[1]);
    const year: number = Number(splitDate[2]);

    const formatCondition2: boolean = isNaN(day) || isNaN(month) || isNaN(year);
    if (formatCondition2) {
        throw new Error("Some characters of day, month and/or year of birth date are not numeric");
    };

    const formatCondition3: boolean = day === 0 || day > 31 || month === 0 || month > 12 || year === 0;
    if (formatCondition3) {
        throw new Error("Invalid birth date format!");
    };
};

export const isMinor = (birth: string): void => {
    const eightennYears: number = new Date(1988, 0, 1).getTime();
    const splitBirth: string[] = birth.split("/");
    const birthTimeStamp: number = new Date(Number(splitBirth[2]), Number(splitBirth[1]) - 1, Number(splitBirth[0])).getTime();
    const ageTimeStamp: number = Date.now() - birthTimeStamp;

    if (ageTimeStamp < eightennYears) {
        throw new Error("Age must be over 18 to be a student or a teacher at Labenu!");
    };
};

export const formatDateToResponse = (date:string): string => {
    const formatingDate = date.toLocaleString();
    const splitDate = formatingDate.split(" ");
    return splitDate[0];
}