import Doctor7 from "./assets/doctor6.jpg";
import Doctor9 from "./assets/doctor9.jpg";
import Doctor10 from "./assets/doctor10.jpg";
import Doctor11 from "./assets/doctor11.jpg";
import Doctor12 from "./assets/doctor12.jpg";
import Doctor13 from "./assets/doctor13.jpg";
import Doctor14 from "./assets/doctor14.jpg";

import doc1 from "./assets/img/doc1.jpg";
import doc2 from "./assets/img/doc2.jpg";
import doc3 from "./assets/img/doc3.jpg";
import doc4 from "./assets/img/doc4.jpg";
import doc5 from "./assets/img/doc5.jpg";
import doc6 from "./assets/img/doc6.jpg";

export const imagArray: string[] = [
  Doctor13,
  Doctor14,
  Doctor7,
  Doctor9,
  Doctor10,
  Doctor11,
  Doctor12,
];

interface DoctorData {
  img: string;
  name: string;
  specialties: string;
  city: string;
}

export const data: DoctorData[] = [
  {
    img: doc1,
    name: "Dr. Serena Mitchell",
    specialties: "Orthopedic Surgeon",
    city: "Bangalore",
  },
  {
    img: doc2,
    name: "Dr. Julian Bennett",
    specialties: "Cardiologist",
    city: "Delhi",
  },
  {
    img: doc3,
    name: "Dr. Camila Rodriguez",
    specialties: "Pediatrician",
    city: "Noida",
  },
  {
    img: doc4,
    name: "Dr. Victor Nguyen",
    specialties: "Neurologist",
    city: "Chennai",
  },
  {
    img: doc5,
    name: "Dr. Ethan Carter",
    specialties: "Dermatologist",
    city: "Bangalore",
  },
  {
    img: doc6,
    name: "Dr. Olivia Martinez",
    specialties: "Ophthalmologist",
    city: "Noida",
  },
  {
    img: doc1,
    name: "Dr. Raz",
    specialties: "Orthopedic Surgeon",
    city: "Bangalore",
  },
  {
    img: doc3,
    name: "Dr. Mia",
    specialties: "Dermatologist",
    city: "Chennai",
  },
  {
    img: doc2,
    name: "Dr. Livin",
    specialties: "Cardiologist",
    city: "Noida",
  },
  {
    img: doc5,
    name: "Dr. Lemon",
    specialties: "Neurologist",
    city: "Delhi",
  },
];


