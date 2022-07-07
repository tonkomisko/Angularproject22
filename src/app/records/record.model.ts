export class Row {
     public ID: string;
     public Name: string;
     public Age: string;
     public Gender: string;
     public Country: string;

     constructor(ID: string, Name: string,
        Age: string, Gender: string, Country: string) {
            this.ID = ID;
            this.Name = Name;
            this.Age = Age;
            this.Gender = Gender;
            this.Country = Country;

        }
     
}