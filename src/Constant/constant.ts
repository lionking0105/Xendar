import { ICourse } from "@/components/CourseCard/CourseCard";

export const AllCourses: ICourse[] = [
  {
    name: "UI/UX Design",
    img: "/assets/ui_ux_design.png",
    dollarPrice: 245.99,
    nairaPrice: null,
    level: "Beginner",
    category: "Most Popular",
    isLoved: false,
    rating: 4.9,
    noEnrolled: 100,
  },
  {
    name: "Fudamentals of UX",
    img: "/assets/ui_ux_design.png",
    dollarPrice: 200.99,
    nairaPrice: null,
    level: "Beginner",
    category: "Most Popular",
    isLoved: false,
    rating: 5.0,
    noEnrolled: 800,
  },
  {
    name: "Frontend Engineering",
    img: "/assets/fe_engr.png",
    dollarPrice: 305.99,
    nairaPrice: null,
    level: "Expert",
    category: "Most Popular",
    isLoved: false,
    rating: 4.8,
    noEnrolled: 490,
  },
  {
    name: "Backend Engineering",
    img: "/assets/fe_engr.png",
    dollarPrice: 400.99,
    nairaPrice: null,
    level: "Intermediate",
    category: "Most Popular",
    isLoved: false,
    rating: 5.0,
    noEnrolled: 312,
  },
  {
    name: "Database Management",
    img: "/assets/fe_engr.png",
    dollarPrice: 380.5,
    nairaPrice: null,
    level: "Beginner",
    category: "New",
    isLoved: false,
    rating: 4.7,
    noEnrolled: 72,
  },
  {
    name: "Figma For Devs",
    img: "/assets/fe_engr.png",
    dollarPrice: 300.49,
    nairaPrice: null,
    level: "Intermediate",
    category: "New",
    isLoved: false,
    rating: 4.9,
    noEnrolled: 122,
  },
  {
    name: "React and Redux",
    img: "/assets/fe_engr.png",
    dollarPrice: 200.49,
    nairaPrice: null,
    level: "Beginner",
    category: "New",
    isLoved: false,
    rating: 4.8,
    noEnrolled: 50,
  },
  {
    name: "Become a MERN developer",
    img: "/assets/fe_engr.png",
    dollarPrice: 500.49,
    nairaPrice: null,
    level: "Intermediate",
    category: "New",
    isLoved: false,
    rating: 4.5,
    noEnrolled: 12,
  },
];


export const FiltersByTime = [
    { filter: "Most Popular", isSelected : true},
    { filter: "New", isSelected : false},
 ]