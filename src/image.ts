export interface Image {
    backgroundObjects: ObjectID[];
    focusedObject: ObjectID;
}

type ObjectID = {
    id: number;
    name: string;
}