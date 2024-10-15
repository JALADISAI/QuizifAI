"use client";
import React, { useState, useEffect } from "react";
import { Line } from "rc-progress";
import Switch from "react-switch";
import { useNavigate } from "react-router-dom";
import Navigation from "../navbar/navbar";
import { FiAlertCircle } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";


import PDF from "../assets/Images/quiz-type/PDF.png";
import Next from "../assets/Images/quiz-type/Next.png";
import QuizifAilogo from "../assets/Images/quiz-type/Quizifai 1.png";
import Dashboard from "../assets/Images/quiz-type/Dashboard.png";
import Quiz from "../assets/Images/quiz-type/Quiz.png";
import History from "../assets/Images/quiz-type/History.png";
import Schedule from "../assets/Images/quiz-type/Schedule.png";
import Notification from "../assets/Images/quiz-type/Notification.png";
import QuizAdmin from "../assets/Images/quiz-type/Quiz-admin.png";
import Profile from "../assets/Images/quiz-type/Profile.png";

// Main-Section-icons
import QuizTitle from "../assets/Images/quiz-type/Quiz-Title.png";
import Dropdown from "../assets/Images/quiz-type/Dropdown.png";
import QuizDiscription from "../assets/Images/quiz-type/Quiz-discription.png";
import Toggle from "../assets/Images/quiz-type/Toggle.png";
import Plus from "../assets/Images/quiz-type/Plus.png";
import CSV from "../assets/Images/quiz-type/CSV.png";

const options1 = [{ label: "Numbers" }];

for (let i = 1; i <= 300; i++) {
  options1.push({ label: i.toString() });
}

const options2 = [
  { label: "Pages for you" },
  {
    label: "Education",
    subCategories: ["Math", "Science", "History", "computer science"],
  },
  { label: "General", subCategories: ["Politics", "Technology", "Health"] },
  { label: "Creative", subCategories: ["Art", "Music", "Writing"] },
];

const options3 = [
  { label: "Division" },
  { label: "Group A" },
  { label: "Group B" },
  { label: "Group C" },
  { label: "Group D" },
  { label: "Group E" },
];

const options4 = [
  { label: "Classes" },
  { label: "Grade 1" },
  { label: "Grade 2" },
  { label: "Grade 3" },
  { label: "Grade 4" },
  { label: "Grade 5" },
  { label: "Grade 6" },
  { label: "Grade 7" },
  { label: "Grade 8" },
  { label: "Grade 9" },
  { label: "Grade 10" },
  { label: "Grade 11" },
  { label: "Grade 12" },
];

const options5 = [
  { label: "Percentage" },
  { label: 0 },
  { label: 5 },
  { label: 10 },
  { label: 15 },
  { label: 20 },
  { label: 25 },
  { label: 30 },
  { label: 35 }, // No quotation marks
  { label: 40 }, // No quotation marks
  { label: 45 },
  { label: 50 },
  { label: 55 },
  { label: 60 },
  { label: 65 },
  { label: 70 },
  { label: 75 },
  { label: 80 },
  { label: 85 },
  { label: 90 },
  { label: 95 },
  { label: 100 },
];

const options6 = [
  { label: "Complexity" },
  { label: "simple" },
  { label: "moderate" },
  { label: "Complex" },
];

const options7 = [
  { label: "Duration" },
  { label: 5 },
  { label: 10 },
  { label: 15 },
  { label: 20 },
  { label: 30 },
  { label: 40 },
  { label: 50 },
  { label: 60 },
  { label: 70 },
  { label: 80 },
  { label: 90 },
  { label: 100 },
  { label: 110 },
  { label: 120 },
  { label: 130 },
  { label: 140 },
  { label: 150 },
  { label: 160 },
  { label: 170 },
  { label: 180 },
];

const options8 = [
  { label: "Timings" },
  { label: "No" },
  { label: "All questions in same time" },
  { label: "Each questions different time" },
];

const options9 = [
  { label: "Minutes" },
  { label: "0.5 Min" },
  { label: "1 Min" },
  { label: "1.5 Min" },
  { label: "2 Min" },
  { label: "2.5 Min" },
];

export default function quiztype() {
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");
  const [multiAnswer, setMultiAnswer] = useState(false);

  const [percentage, setPercentage] = useState("");
  const [Complexity, setComplexity] = useState("");
  const [retakeOption, setRetakeOption] = useState("");
  const [retake, setRetake] = useState(0);
  const [duration, setDuration] = useState("");
  const [timings, setTimings] = useState("No");
  const [minutes, setMinutes] = useState("");
  const [availablefrom, setavailablefrom] = useState("");
  const [disabledon, setdisabledon] = useState("");

  const [publicAccess, setPublicAccess] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isRetakeOn, setIsRetakeOn] = useState(false);
  const [selectedValue, setSelectedValue] = useState("0");
  const [showRegistrationSuccess, setShowRegistrationSuccess] = useState(false);

  const [quiztotalmarks, setquiztotalmarks] = useState("100");
  const [questionWeightage, setquestionWeightage] = useState("");
  const [multiAnswerFlag, setmultiAnswerFlag] = useState("");
  const [questionDuration, setquestionDuration] = useState("");
  const [optionsArray, setoptionsArray] = useState("");
  const [questionsData, setquestionsData] = useState("");
  const [numQuestions, setNumQuestions] = useState("");
  // const [questions, setQuestions] = useState(
  //   // Array.from({ length: numQuestions }, () => ({
  //   //   question_text: "",
  //   //   options: [
  //   //     { answer_option_text: "" },
  //   //     { answer_option_text: "" },
  //   //     { answer_option_text: "" },
  //   //     { answer_option_text: "" },
  //   //   ],
  //   // }))
  // );
  const [courseOptions, setCourseOptions] = useState([]);
  const [classOptions, setClassOptions] = useState([]);
  const [coursename, setcoursename] = useState("");

  const [categoryOptions, setCategoryOptions] = useState([]);
  const [quizCategory, setQuizCategory] = useState("");
  const [subCategoryOptions, setSubCategoryOptions] = useState([]);
  const [subCategory, setSubCategory] = useState("");
  const [complexities, setComplexities] = useState([]);
  const [selectedComplexity, setSelectedComplexity] = useState("");
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFile, setUploadedFile] = useState(null);

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]);

  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [classes, setClasses] = useState([]);

  const [selectedQuestions, setSelectedQuestions] = useState([]); 

  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const authToken = localStorage.getItem('authToken'); // Retrieve the auth token from localStorage

      if (!authToken) {
        console.error('No authentication token found. Please log in again.');
        return;
      }
      const response = await fetch(
        "https://dev.quizifai.com:8010/categories&sub_categories/",
      {
        headers: {
          'Authorization': `Bearer ${authToken}`, // Include the auth token in the Authorization header
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.response === "success") {
        setCategories(data.data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  useEffect(() => {
    if (categories.length > 0) {
      const generalCategory = categories.find(category => category.category_name === 'General');
      if (generalCategory) {
        setSelectedCategory(generalCategory.category_name);
        setSubCategories(generalCategory.sub_categories.map(sub => sub.sub_category_name));
      }
    }
  }, [categories]);
  
  useEffect(() => {
    if (subCategories.length > 0) {
      const generalSubCategory = subCategories.find(subCategory => subCategory === 'General');
      if (generalSubCategory) {
        setSelectedSubCategory(generalSubCategory);
      } else {
        setSelectedSubCategory(subCategories[0]); // Default to the first subcategory if 'General' is not available
      }
    }
  }, [subCategories]);
  // Handle category selection
  const handleSelectCategory = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
    const category = categories.find(cat => cat.category_name === selectedCategory);
    if (category) {
      setSubCategories(category.sub_categories.map(subCat => subCat.sub_category_name));
      setSelectedSubCategory(''); // Reset subcategory when a new category is selected
    }
  };
  useEffect(() => {
    // Get the current date and format it as YYYY-MM-DD
    const today = new Date().toISOString().split('T')[0];
    setavailablefrom(today);
  }, []);
  // Handle subcategory selection
  const handleSelectSubCategory = (event) => {
    const selectedSubCategory = event.target.value;
    setSelectedSubCategory(selectedSubCategory);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const authToken = localStorage.getItem('authToken'); // Retrieve the auth token from localStorage

      if (!authToken) {
        console.error('No authentication token found. Please log in again.');
        return;
      }
      const response = await fetch("https://dev.quizifai.com:8010/courses-clsses/",{
        headers: {
          'Authorization': `Bearer ${authToken}`, // Include the auth token in the Authorization header
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      
      if (data.response === "success") {
        setCourses(data.data);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };
  useEffect(() => {
    const generalCourse = courses.find(course => course.course_name === 'General');
    if (generalCourse) {
      setSelectedCourse(generalCourse.course_name);
      setClasses(generalCourse.classes.map(cls => cls.class_name));
    }
  }, [courses]);

  useEffect(() => {
    if (classes.length > 0) {
      const generalClass = classes.find(className => className === 'General');
      if (generalClass) {
        setSelectedClass(generalClass);
      }
    }
  }, [classes]);
  // Handle course selection
  // const handleSelectCourse = (event) => {
  //   const selectedCourse = event.target.value;
  //   setSelectedCourse(selectedCourse);
  //   // Find the selected course and set its classes
  //   const course = courses.find(
  //     (course) => course.course_name === selectedCourse
  //   );
  //   if (course) {
  //     setClasses(course.classes.map((cls) => cls.class_name));
  //   }
  // };
  const handleSelectCourse = (event) => {
    const selectedCourse = event.target.value;
    setSelectedCourse(selectedCourse);
  
    if (selectedCourse === "") {
      // Clear the selection
      setClasses([]);
      setSelectedClass('');
    } else {
      // Find the selected course and set its classes
      const course = courses.find(
        (course) => course.course_name === selectedCourse
      );
      if (course) {
        setClasses(course.classes.map((cls) => cls.class_name));
      }
    }
  };
  // Handle class selection
  const handleSelectClass = (event) => {
    const selectedClass = event.target.value;
    setSelectedClass(selectedClass);
  };

  useEffect(() => {
    fetchComplexities();
  }, []);

  const fetchComplexities = async () => {
    try {
      const authToken = localStorage.getItem('authToken'); // Retrieve the auth token from localStorage

      if (!authToken) {
        console.error('No authentication token found. Please log in again.');
        return;
      }
      const response = await fetch("https://dev.quizifai.com:8010/complexities/",{
        headers: {
          'Authorization': `Bearer ${authToken}`, // Include the auth token in the Authorization header
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.response === "success") {
        setComplexities(
          data.data.map((complexity) => complexity.complexity_name)
        );
      }
    } catch (error) {
      console.error("Error fetching complexities:", error);
    }
  };

  // Handle complexity selection
  const handleSelectComplexity = (event) => {
    setSelectedComplexity(event.target.value);
  };
  const handleAvailableFromChange = (e) => {
    setavailablefrom(e.target.value);
    // Clear the disabledOn date if it's before the new availableFrom date
    if (disabledon && e.target.value > disabledon) {
      setdisabledon('');
    }
  };
  
  const handleDisabledOnChange = (e) => {
    const newDisabledOn = e.target.value;
    if (availablefrom && newDisabledOn < availablefrom) {
      // Show an error message or clear the disabledOn field
      setdisabledon('');
      setErrorMessage("Disabled on date cannot be earlier than available from date.");
    } else {
      setdisabledon(newDisabledOn);
      setErrorMessage('');
    }
  };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("https://dev.quizifai.com:8010/complexities/", {
  //       method: "GET",
  //       headers: {
  //         accept: "application/json",
  //       },
  //     });
  //     const responseData = await response.json();
  //     if (responseData.response === "success") {
  //       setComplexities(responseData.data);
  //     } else {
  //       console.error("Response was not successful:", responseData);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   // Fetch categories
  //   fetch("https://dev.quizifai.com:8010/categories/", {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch categories");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       // Check if data is an array
  //       if (Array.isArray(data.data)) {
  //         setCategoryOptions(data.data);
  //       } else {
  //         throw new Error("Invalid data format for categories");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching categories:", error);
  //       // Handle error, e.g., setCategoryOptions([]) to clear any existing data
  //       setCategoryOptions([]);
  //     });
  // }, []);

  // useEffect(() => {
  //   if (quizCategory !== "") {
  //     // Fetch subcategories based on selected category
  //     fetch("https://dev.quizifai.com:8010/get_categories/", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ category_name: quizCategory }),
  //     })
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error("Failed to fetch subcategories");
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         if (data.response === "success" && Array.isArray(data.data)) {
  //           setSubCategoryOptions(data.data);
  //         } else {
  //           throw new Error("Invalid data format for subcategories");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching subcategories:", error);
  //         // Handle error
  //       });
  //   }
  // }, [quizCategory]);

  // const handleSelectCategory = (e) => {
  //   const selectedCategory = e.target.value;
  //   setQuizCategory(selectedCategory);
  //   // Reset subcategory when category changes
  //   setSubCategory("");
  // };

  // const handleSelectSubCategory = (e) => {
  //   setSubCategory(e.target.value);
  // };

  // useEffect(() => {
  //   // Fetch courses
  //   fetch("https://dev.quizifai.com:8010/courses/")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch courses");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       if (data.response === "success") {
  //         setCourseOptions(data.data);
  //       } else {
  //         throw new Error("Failed to fetch courses");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching courses:", error);
  //     });
  // }, []);

  // useEffect(() => {
  //   // Fetch classes based on selected course name
  //   if (coursename !== "") {
  //     fetch("https://dev.quizifai.com:8010/get_class_name/", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ course_name: coursename }),
  //     })
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error("Failed to fetch classes: " + response.statusText);
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         if (data.response === "success" && Array.isArray(data.data)) {
  //           setClassOptions(data.data);
  //         } else {
  //           throw new Error(
  //             "Invalid data format for classes: " + JSON.stringify(data)
  //           );
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching classes:", error);
  //       });
  //   }
  // }, [coursename]);
  // const handleSelectCourse = (e) => {
  //   const selectedCourse = e.target.value;
  //   setcoursename(selectedCourse);
  //   // Reset classes when course changes
  //   setClasses("");
  // };

  // const handleSelectClass = (e) => {
  //   setClasses(e.target.value);
  // }; // Dependency on coursename ensures this effect runs whenever coursename changes

  const navigate = useNavigate();
  const handleNext1 = () => {
    setShowRegistrationSuccess(true);
  };
  const handleNext2 = () => {
    setShowRegistrationSuccess(false);
  };

  const handleToggleButton = (questionIndex, optionIndex) => {
    const newOptions = questions[questionIndex].options.map(
      (option, index) => ({
        ...option,
        correct_answer_flag: multiAnswer
          ? index === optionIndex
            ? !option.correct_answer_flag
            : option.correct_answer_flag
          : index === optionIndex,
        // If multiAnswer is true, toggle the clicked option, else set only the clicked option to true, rest to false
      })
    );

    // If multiAnswer is true, explicitly set unselected options to false
    if (multiAnswer) {
      newOptions.forEach((option, index) => {
        if (index !== optionIndex && !option.correct_answer_flag) {
          newOptions[index].correct_answer_flag = false;
        }
      });
    }

    const newQuestions = questions.map((question, idx) => ({
      ...question,
      options: idx === questionIndex ? newOptions : question.options,
    }));
    setQuestions(newQuestions);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
    if (file) {
      handleNext(file);
    }
  };

  // const handleNext = async () => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("quiz_title", title);
  //     formData.append("number_of_questions", numQuestions);
  //     formData.append("quiz_description", description);
  //     formData.append("quiz_category_name", selectedCategory);
  //     formData.append("multi_answer", multiAnswer);
  //     formData.append("quiz_sub_category_name", selectedSubCategory);
  //     formData.append("class_name", selectedClass);
  //     formData.append("pass_percentage", percentage);
  //     formData.append("quiz_complexity_name", selectedComplexity);
  //     formData.append("retake_flag", retake);
  //     formData.append("quiz_duration", duration);
  //     formData.append("course_name", selectedCourse);
  //     formData.append("quiz_time_bounded_questions", timings);
  //     formData.append("quiz_public_access", publicAccess);
  //     formData.append("available_from", availablefrom);
  //     formData.append("disabled_on", disabledon);
  //     formData.append("quiz_total_marks", quiztotalmarks);
  //     formData.append("file", uploadedFile); // Assuming you have a ref for file input

  //     const response = await fetch(
  //       "https://dev.quizifai.com:8010/Upload quiz with PDF...../",
  //       {
  //         method: "POST",
  //         body: formData,
  //         onUploadProgress: (progressEvent) => {
  //           const progress = Math.round(
  //             (progressEvent.loaded / progressEvent.total) * 100
  //           );
  //           setUploadProgress(progress);
  //         },
  //       }
  //     );
  //     const responseData = await response.json();
  //     console.log(responseData, "data");

  //     if (response.ok && responseData.response === "success") {
  //       // Assuming router and state setter are defined properly
  //       setQuestions(responseData.data[0].questions);
  //     } else {
  //       if (
  //         responseData.detail &&
  //         responseData.detail[0].type === "missing" &&
  //         responseData.detail[0].loc[1] === "body" &&
  //         responseData.detail[0].loc[2] === "num_questions"
  //       ) {
  //         setErrorMessage(
  //           "Please provide the number of questions for the quiz."
  //         );
  //       } else {
  //         setErrorMessage(responseData.detail);
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Type-Quiz failed:", error);
  //     setErrorMessage("An error occurred while choosing the type of the quiz");
  //   }
  // };
 
  const handleNext = async (file) => {
  //   if (!uploadedFile) {
  //     alert("Please upload a file before proceeding.");
  //     return; // Prevent further execution
  // }
  const requiredFields = [
    title,
    numQuestions,
    description,
    selectedCategory,
    selectedSubCategory,
    percentage,
    selectedComplexity,
    duration,
    timings,
    availablefrom,
    quiztotalmarks,
];

const isAnyFieldEmpty = requiredFields.some(field => !field);

if (isAnyFieldEmpty) {
    alert("Please fill in all the required fields before proceeding.");
    return; // Prevent further execution
}
const authToken = localStorage.getItem('authToken'); // Retrieve the auth token from localStorage

if (!authToken) {
  setErrorMessage('No authentication token found. Please log in again.');
  clearInterval(interval);
  return;
}
    try {
      const formData = new FormData();
      formData.append("quiz_title", title);
      formData.append("number_of_questions", numQuestions);
      formData.append("quiz_description", description);
      formData.append("quiz_category_name", selectedCategory);
      formData.append("multi_answer", multiAnswer);
      formData.append("quiz_sub_category_name", selectedSubCategory);
      formData.append("class_name", selectedClass);
      formData.append("pass_percentage", percentage);
      formData.append("quiz_complexity_name", selectedComplexity);
      formData.append("retake_flag", selectedValue);
      formData.append("quiz_duration", duration);
      formData.append("course_name", selectedCourse);
      formData.append("quiz_time_bounded_questions", timings);
      formData.append("quiz_public_access", publicAccess);
      formData.append("available_from", availablefrom);
      formData.append("disabled_on", disabledon);
      formData.append("quiz_total_marks", quiztotalmarks);
      formData.append("file", file);
   
      const options = {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${authToken}`, // Include the auth token in the Authorization header
        },
        body: formData,
      };
  
      const uploadFileWithSimulatedProgress = (url, options) => {
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open(options.method, url);
  
          xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
              resolve(xhr.response);
            } else {
              reject(xhr.statusText);
            }
          };
  
          xhr.onerror = () => reject(xhr.statusText);
  
          Object.keys(options.headers || {}).forEach(key => {
            xhr.setRequestHeader(key, options.headers[key]);
          });
  
          xhr.send(options.body);
  
          // Simulate progress
          let progress = 0;
          const interval = setInterval(() => {
            if (progress < 95) {
              progress += 1;
              setUploadProgress(progress);
            } else {
              clearInterval(interval);
            }
          }, 100); // Update every 100ms
  
          xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
              clearInterval(interval);
              setUploadProgress(100); // Set to 100% on completion
            }
          };
        });
      };
  
      const responseText = await uploadFileWithSimulatedProgress(
        "https://dev.quizifai.com:8010/Upload quiz with PDF...../",
        options
      );
  
      const responseData = JSON.parse(responseText);
      console.log(responseData, "data");
      if (responseData.response === "success") {
        if (responseData.data && responseData.data.questions) {
          setQuestions(responseData.data.questions);
        } else {
          setErrorMessage("Questions data is missing from the response.");
        }
      } else {
        if (
          responseData.detail &&
          responseData.detail[0].type === "missing" &&
          responseData.detail[0].loc[1] === "body" &&
          responseData.detail[0].loc[2] === "num_questions"
        ) {
          setErrorMessage("Please provide the number of questions for the quiz.");
        } else {
          setErrorMessage(responseData.detail);
        }
      }
    } catch (error) {
      console.error("Type-Quiz failed:", error);
      setErrorMessage("An error occurred while choosing the type of the quiz");
    }
  };
  

  const handleNext4 = async () => {
    try {
      const user_id = localStorage.getItem('user_id');
  
      // Check if user_id is retrieved successfully
      if (!user_id) {
        setErrorMessage("User ID not found. Please log in again.");
        return;
      }
      const authToken = localStorage.getItem('authToken'); // Retrieve the auth token from localStorage

      if (!authToken) {
        setErrorMessage('No authentication token found. Please log in again.');
        clearInterval(interval);
        return;
      }
      const response = await fetch(
        `https://dev.quizifai.com:8010/crt_qz_from_pdf`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${authToken}`,
          },
          body: JSON.stringify({
            quiz_title: title,
            num_questions: numQuestions,
            quiz_description: description,
            quiz_category_name: selectedCategory,
            multi_answer: multiAnswer,
            quiz_sub_category_name: selectedSubCategory,
            class_name: selectedClass,
            pass_percentage: percentage,
            quiz_complexity_name: selectedComplexity,
            retake_flag: selectedValue,
            quiz_duration: duration,
            course_name: selectedCourse,
            quiz_time_bounded_questions: timings,
            quiz_public_access: publicAccess,
            available_from: availablefrom,
            disabled_on: disabledon,
            quiz_total_marks: quiztotalmarks,
            user_id: user_id,
            questions: questions.map((question) => ({
              question_text: question.question_text,
              question_weightage: question.question_weightage,
              multi_answer_flag: multiAnswer,
              question_duration: question.question_duration,
              options: question.options.map((option) => ({
                answer_option_text: option.answer_option_text,
                correct_answer_flag: option.correct_answer_flag,
              })),
            })),
          }),
        }
      );
  
      const responseData = await response.json();
      console.log(responseData, "data");
  
      if (response.ok) {
        // Assuming router and state setter are defined properly
        navigate("/quizcreated", { state: { quizData: responseData } });
      } else {
        if (responseData.detail) {
          if (
            responseData.detail[0].type === "missing" &&
            responseData.detail[0].loc[1] === "body" &&
            responseData.detail[0].loc[2] === "num_questions"
          ) {
            setErrorMessage("Please provide the number of questions for the quiz.");
          } else if (responseData.detail === "Option Text is missing.") {
            setErrorMessage("Option Text is missing.");
          } else {
            setErrorMessage(responseData.detail);
          }
        } else {
          setErrorMessage("An unexpected error occurred.");
        }
      }
    } catch (error) {
      console.error("Type-Quiz failed:", error);
      setErrorMessage("An error occurred while choosing the type of the quiz");
    }
  };
  

  const handleQuestionChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = value;
    setQuestions(updatedQuestions);
  };
  const toggler1 = (checked) => {
    setMultiAnswer(checked);
  };

  const toggler2 = () => {
    setIsRetakeOn((prevState) => !prevState);
    if (!isRetakeOn) {
      // If the switch is turned on, set the selected value to '1'
      setSelectedValue("1");
    } else {
      // If the switch is turned off, reset the selected value to '0'
      setSelectedValue("0");
    }
  };

  const handleDropdownChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const toggler3 = (checked) => {
    setPublicAccess(checked);
  };

  function handleSelect1(event) {
    setNumber(event.target.value);
  }

  function handleSelect4(event) {
    setClasses(event.target.value);
  }

  function handleSelect5(event) {
    const selectedValue = event.target.value.replace("::", "");
    setPercentage(selectedValue);
  }

  function handleSelect6(event) {
    setSelectedComplexity(event.target.value);
  }

  function handleSelect7(event) {
    const selectedValue = event.target.value.replace("::", "");
    setDuration(selectedValue);
  }

  function handleSelect8(event) {
    setTimings(event.target.value);
  }

  function handleSelect9(event) {
    setMinutes(event.target.value);
  }
  const sortedCategories = categories.sort((a, b) => 
    a.category_name.localeCompare(b.category_name)
  );
  const getOptions = (options) => {
    const correctOption = options.find(option => option.correct_answer_flag);
    const incorrectOptions = options.filter(option => !option.correct_answer_flag);

    let selectedOptions;
    if (correctOption) {
      selectedOptions = [correctOption, ...incorrectOptions.slice(0, 3)];
    } else {
      selectedOptions = options.slice(0, 4);
    }

    // Shuffle the selected options to randomize the position of the correct answer
    for (let i = selectedOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [selectedOptions[i], selectedOptions[j]] = [selectedOptions[j], selectedOptions[i]];
    }

    return selectedOptions;
  };

  const handleDeleteQuestion = (questionIndex) => {
    const updatedQuestions = questions.filter((_, index) => index !== questionIndex);
    setQuestions(updatedQuestions);
  };
  
  const toggleQuestionSelection = (index) => {
    setSelectedQuestions(prevSelected => {
      if (prevSelected.includes(index)) {
        return prevSelected.filter(i => i !== index);
      } else {
        return [...prevSelected, index];
      }
    });
  };
  const handleDeleteSelected = () => {
    const newQuestions = questions.filter((_, index) => !selectedQuestions.includes(index));
    setQuestions(newQuestions);
    // setNumQuestions(newQuestions.length);
    setSelectedQuestions([]);
    // setIsAllSelected(false);
  };
  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex].answer_option_text = value;
    setQuestions(updatedQuestions);
  };
  const Back = () => {
    
    navigate("/create-quiz");
  
};
  return (
    <>
      <div>
        {/* Navigation-Section */}
        <header className="w-[219px] h-[1000px] absolute top-[-19px] left-[-9px] rounded-tl-[20px] rounded-bl-[20px] bg-[#F5F5FB] z-10 shadow-lg shadow-gray-400/60">
          {/* <div className="h-[300px] w-[270px] absolute top-[20px] -left-[20px]">
            <img src={QuizifAilogo} alt="QuizifAi Logo Icon" />
          </div> */}

          {/* Navigation-icons */}
          {/* <div className="flex w-[15px] h-[15px] absolute top-[231px] left-[51px]">
            <img src={Dashboard} alt="Dashborad img" />
            <a
              className="ml-5 -mt-0.5 text-Poppins font-medium text-[15px] leading-[22.5px] text-[#9696BB]"
              for=""
            >
              Dashboard
            </a>
          </div>

          <div className="flex w-[16px] h-[15px] absolute top-[285px] left-[51px]">
            <img src={Quiz} alt="Quiz's img" />
            <a
              className="ml-5 -mt-0.5 text-Poppins font-medium text-[15px] leading-[22.5px] text-[#9696BB]"
              for=""
            >
              Quiz
            </a>
          </div>

          <div className="flex w-[13.87px] h-[15.41px] absolute top-[338px] left-[51px]">
            <img src={History} alt="History img" />
            <a
              className="ml-5 -mt-0.5 text-Poppins font-medium text-[15px] leading-[22.5px] text-[#9696BB]"
              for=""
            >
              History
            </a>
          </div>

          <div className="flex w-[17px] h-4 absolute top-[394px] left-[51px]">
            <img src={Schedule} alt="Schedule img" />
            <a
              className="ml-4 -mt-0.5 text-Poppins font-medium text-[15px] leading-[22.5px] text-[#9696BB]"
              for=""
            >
              Schedule
            </a>
          </div>

          <div className="flex w-4 h-[15px] absolute top-[453px] left-[51px]">
            <img src={Notification} alt="Notification img" />
            <a
              className="ml-4 -mt-0.5 text-Poppins font-medium text-[15px] leading-[22.5px] text-[#9696BB]"
              for=""
            >
              Notification
            </a>
          </div>

          <div className="flex w-[25.46px] h-[27.87px] absolute top-[508px] left-[51px]">
            <img className="-ml-2.5" src={QuizAdmin} alt="QuizAdmin img" />
            <a
              className="ml-4 text-Poppins font-medium text-[15px] leading-[15px] text-nowrap text-[#30304F]"
              for=""
            >
              Quiz Admin
            </a>
          </div>

          <div className="flex w-[17px] h-[17px] absolute top-[581px] left-[51px]">
            <img src={Profile} alt="Profile img" />
            <a
              className="ml-4 -mt-0.5 text-Poppins font-medium text-[15px] leading-[22.5px] text-[#9696BB]"
              for=""
            >
              Profile
            </a>
          </div> */}
          <Navigation />
        </header>
        <div className="absolute top-[30px] left-[1260px] cursor-pointer text-[#eeb600f0]" onClick={Back}><MdOutlineCancel /></div>

        {!showRegistrationSuccess && (
          <main className="w-max-auto mt-[100px]">
             <div className="w-[79%] p-[5px] absolute top-[30px] left-[200px] rounded-[10px] bg-[#fee2e2] z-0">
              <h className="font-Poppins font-semibold text-[20px] leading-[37.5px] text-[#214082] flex justify-center items-center mt-1l">
              Finalize the configuration and click 'Next' to proceed with adding your quiz questions.
              </h>
            </div>
            <div className="">
            <div className="flex">
              {/* <div className="w-[51px] h-[37px] absolute top-[102px] left-[284px]">
              {/* <img src={QuizTitle} alt="QuizTitle icon" /> */}
              {/* </div>  */}

              <div className="w-[201px] h-[22px] absolute top-[111px] left-[284px]">
                <h1 className="font-Poppins text-[#214082] font-medium text-[15px] leading-[22.5px]">
                  Quiz Title<span className="required ml-[1px] text-red-500">*</span>
                </h1>
              </div>

              <div className="">
                <input
                  className="w-[420px] h-[35px] absolute top-[99px] left-[498px] rounded-[10px] border p-2"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
              </div>

              <div className="w-[210px] h-[23px] absolute top-[110px] left-[941px] mb-10 justify-center items-center grid">
                <h1 className="font-Poppins text-[#214082] font-medium text-[15px] leading-[22.5px]">
                  Number of Questions<span className="required ml-[1px] text-red-500">*</span>
                </h1>
                {/* <h1 className="font-Poppins text-[#214082] font-semibold text-[15px] ml-5 leading-[22.5px]">
                  of
                </h1>
                <h1 className="font-Poppins text-[#214082] font-semibold text-[15px] leading-[22.5px]">
                  Question
                </h1> */}
              </div>

              <div className=" rounded-lg absolute top-[99px] left-[1144px]">
                <input
                  type="number"
                  className="w-[135px] h-[35px] border-solid border-[#B8BBC2] border-[1.8px] px-3  rounded-md text-[12px] font-medium leading-[18px] cursor-pointer"
                  placeholder="No of question "
                  value={numQuestions}
                  onChange={(e) => setNumQuestions(e.target.value)}
                  // onChange={(e) => {
                  //   const value = parseInt(e.target.value);
                  //   setNumQuestions(value);
                  //   setQuestions(
                  //     Array.from({ length: value }, () => ({
                  //       question_text: "",
                  //       options: [
                  //         { answer_option_text: "" },
                  //         { answer_option_text: "" },
                  //         { answer_option_text: "" },
                  //         { answer_option_text: "" },
                  //       ],
                  //     }))
                  //   );
                  // }}
                />
              </div>
            </div>

            <div className="flex">
              {/* <div className="w-[43px] h-[43px] absolute top-[166px] left-[283px]">
              <img src={QuizDiscription} alt="QuizDiscription icon" />
            </div> */}

              <div className="w-[201px] h-[22px] absolute top-[174px] left-[284px]">
                <h1 className="font-Poppins text-[#214082] font-medium text-[15px] leading-[22.5px]">
                  Quiz Description<span className="required ml-[1px] text-red-500">*</span>
                </h1>
              </div>

              <div className="">
                <input
                  className="w-[780px] h-[35px] absolute top-[163px] left-[498px] rounded-[10px] border  p-2"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></input>
              </div>
            </div>

            <div className="flex">
              <div className="w-[201px] h-[27px] absolute top-[248px] left-[284px]">
                <h1 className="font-Poppins text-[#214082] font-medium text-[15px] leading-[22.5px]">
                  Quiz Category<span className="required ml-[1px] text-red-500">*</span>
                </h1>
              </div>

              <div className="  absolute top-[240px] left-[498px]">
                <select
                  className="w-[260px] h-[35px] border-solid border-[2px] border-[#B8BBC2] px-2 rounded-md cursor-pointer text-[12px]"
                  value={selectedCategory}
                  onChange={handleSelectCategory}
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  {sortedCategories.map((category) => (
                    <option
                      key={category.category_id}
                      value={category.category_name}
                    >
                      {category.category_name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-[164px] h-[30px] absolute top-[458px] left-[820px]">
                <h1 className="font-Poppins text-[#214082] font-medium text-[15px] leading-[22.5px]">
                  Multiple Answers<span className="required ml-[1px] text-red-500">*</span>
                </h1>
              </div>

              {/* <div className="w-[36px] h-5 absolute top-[251px] left-[935px]">
              <img src={Toggle} />
            </div> */}

              <div className="w-[36px] h-5 absolute top-[458px] left-[1020px]">
                <Switch
                  onChange={toggler1}
                  checked={multiAnswer}
                  className="react-switch"
                />
              </div>
            </div>

            <div className="flex">
              <div className="w-[201px] h-[27px] absolute top-[248px] left-[820px]">
                <h1 className="font-Poppins text-[#214082] font-medium text-[15px] leading-[22.5px]">
                  Sub Category<span className="required ml-[1px] text-red-500">*</span>
                </h1>
              </div>

              <div className=" rounded-lg w-[260px] flex border-solid border-[#B8BBC2] border-[1.8px] text-[12px] font-medium leading-[18px] absolute top-[240px] left-[1020px]">
                <select
                  className="w-[260px] h-[35px] text-[12px]  border-solid border-[#B8BBC2] px-3 rounded-md cursor-pointer"
                  onChange={handleSelectSubCategory}
                  value={selectedSubCategory}
                >
                  <option value="" disabled>
                    Select a subcategory
                  </option>
                  {subCategories.map((subCategory, index) => (
                    <option key={index} value={subCategory}>
                      {subCategory}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="w-[164px] h-[30px] absolute top-[314px] left-[284px]">
              <h1 className="font-Poppins text-[#214082] font-medium text-[15px] leading-[22.5px]">
                Course
              </h1>
            </div>

            {/* <div className="w-[36px] h-5 absolute top-[251px] left-[935px]">
              <img src={Toggle} />
            </div> */}

            <div className="w-[260px]  absolute top-[309px] left-[500px]">
            <select
  className="w-[260px] h-[35px] border-solid text-[12px] border-[2px] border-[#B8BBC2] p-2 rounded-md cursor-pointer"
  value={selectedCourse}
  onChange={handleSelectCourse}
>
  <option value="" disabled>
    Select a course
  </option>
  <option value="">None</option> {/* Added this option */}
  {courses.map((course) => (
    <option key={course.course_id} value={course.course_name}>
      {course.course_name}
    </option>
  ))}
</select>
            </div>

            <div className="w-[109px] h-[27px] absolute top-[320px] left-[820px]">
              <h1 className="font-Poppins text-[#214082] font-medium text-[15px] leading-[22.5px]">
                Classe
              </h1>
            </div>

            <div className=" rounded-lg w-[260px] flex border-solid border-[#B8BBC2] border-[1.8px] text-[12px] font-medium leading-[18px] absolute top-[306px] left-[1020px]">
              <select
                className="w-[260px] h-[35px] border-solid border-[#B8BBC2] px-3 text-[12px] rounded-md cursor-pointer"
                onChange={handleSelectClass}
                value={selectedClass}
                disabled={classes.length === 0}
              >
                <option value="" disabled>
                  Select a class
                </option>
                {classes.map((className, index) => (
                  <option key={index} value={className}>
                    {className}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex">
              <div className="w-[164px] h-[30px] absolute top-[383px] left-[284px]">
                <h1 className="font-Poppins text-[#214082] font-medium text-[15px] leading-[22.5px]">
                  Pass percentage<span className="required ml-[1px] text-red-500">*</span>
                </h1>
              </div>

              <div className=" rounded-lg w-[129px] flex border-solid border-[#B8BBC2] border-[1.8px] absolute top-[376px] left-[498px]">
                <select
                  className="w-[264px] px-3 h-[35px] rounded-md cursor-pointer text-[12px]"
                  onChange={handleSelect5}
                  value={percentage}
                >
                  {options5.map((options5) => (
                    <option className="border-grey-400 leading-[18px] font-medium rounded">
                      {options5.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-[164px] h-[30px] absolute top-[383px] left-[820px]">
                <h1 className="font-Poppins text-[#214082] font-medium text-[15px] leading-[22.5px]">
                  Complexity<span className="required ml-[1px] text-red-500">*</span>
                </h1>
              </div>

              <div className=" rounded-lg w-[129px] flex border-solid border-[#B8BBC2] border-[1.8px] absolute top-[376px] left-[1020px]">
                <select
                  className="w-[264px] h-[35px] p-2 rounded-md cursor-pointer text-[12px]"
                  onChange={handleSelectComplexity}
                  value={selectedComplexity}
                >
                  <option value="" disabled>
                    Complexities
                  </option>
                  {complexities.map((complexity, index) => (
                    <option key={index} value={complexity}>
                      {complexity}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex">
              <div className="w-[164px] h-[30px] absolute top-[458px] left-[284px]">
                <h1 className="font-Poppins text-[#214082] font-medium text-[15px] leading-[22.5px]">
                  Retake Option<span className="required ml-[1px] text-red-500">*</span>
                </h1>
              </div>

              <div className="w-[36px] h-5 absolute top-[458px] left-[505px]">
                <Switch onChange={toggler2} checked={isRetakeOn} />
              </div>
              <div className="">
                {isRetakeOn ? (
                  <select
                    className="w-[48px] h-[35px] absolute top-[455px] left-[568px] rounded-[10px] border-[1.8px] bg-[#F4F4F4]"
                    value={selectedValue}
                    onChange={handleDropdownChange}
                  >
                    <option value="" disabled>
                      select
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                ) : (
                  <input
                    className="w-[48px] h-[35px] absolute top-[455px] left-[568px] rounded-[10px] border-[1.8px] bg-[#F4F4F4]"
                    value={selectedValue}
                    readOnly
                  />
                )}
              </div>
            </div>

            <div className="flex">
              <div className="w-[174px] h-[30px] absolute top-[527px] left-[284px]">
                <h1 className="font-Poppins text-[#214082] font-medium text-[15px] leading-[22.5px]">
                  Quiz Duration<span className="required ml-[1px] text-red-500">*</span>
                </h1>
              </div>

              <div className=" rounded-lg w-[166px] flex border-solid border-[#B8BBC2] border-[1.8px] absolute top-[520px] left-[498px]">
                <select
                  className="w-[166px] px-3 h-[35px] rounded-md cursor-pointer text-[12px]"
                  onChange={handleSelect7}
                  value={duration}
                >
                  {options7.map((option, index) => (
                    <option
                      key={index}
                      className="border-grey-400 leading-[18px] font-medium rounded"
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
                {/* <input type="text"className="w-[166px] px-3 py-3 rounded-md  text-[12px]" onChange={handleSelect7} value={duration} 
              placeholder="Duration"/> */}
                {/* <TiEyeOutline  className=" absolute left-[165px] top-[15px] " /> */}
                <div className="relative">
                  <button
                    onClick={() => setIsOpen(true)}
                    className="absolute left-[10px] top-[15px]"
                  >
                    <FiAlertCircle />
                  </button>
                  {isOpen && (
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 p-4 rounded shadow-md w-[350px] ">
                      <p>The maximum duration time is 180 mints.</p>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-[238px] h-[30px] absolute top-[527px] left-[820px]">
                <h1 className="font-Poppins text-[#214082] font-medium text-[15px] leading-[22.5px]">
                  Time bounded Questions<span className="required ml-[1px] text-red-500">*</span>
                </h1>
              </div>

              <div className=" rounded-lg w-[260px] flex border-solid border-[#B8BBC2] border-[1.8px] absolute top-[520px] left-[1020px]">
                <select
                  className="w-[260px] px-3 h-[35px] rounded-md cursor-pointer text-[12px]"
                  onChange={handleSelect8}
                  value={timings}
                >
                  {options8.map((options8) => (
                    <option className="border-grey-400 leading-[18px] font-medium rounded">
                      {options8.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="w-[253px] h-[30px] absolute top-[590px] left-[284px]">
              <h1 className="font-Poppins text-[#214082] font-medium text-[15px] leading-[22.5px]">
                Quiz will be available from<span className="required ml-[1px] text-red-500">*</span>
              </h1>
            </div>

            <div className="absolute top-[584px] left-[498px]">
              <input
              type="date"
                className="rounded-lg w-[166px] h-[35px] flex border-solid border-[#B8BBC2] border-[1.8px]
              text-[#9696BB] leading-[22.5px] text-[15p] font-medium px-4"
                placeholder="YYYY-MM-DD"
                value={availablefrom}
                onChange={handleAvailableFromChange}
              ></input>
            </div>

            <div className="w-[233px] h-[30px] absolute top-[590px] left-[820px]">
              <h1 className="font-Poppins text-[#214082] font-medium text-[15px] leading-[22.5px]">
                Quiz must be disable on{" "}
              </h1>
            </div>

            <div className=" absolute top-[584px] left-[1020px]">
              <input
              type="date"
                className="rounded-lg w-[166px] h-[35px] flex border-solid border-[#B8BBC2] border-[1.8px]
              text-[#9696BB] leading-[22.5px] text-[15p] font-medium px-4"
                placeholder="YYYY-MM-DD"
                value={disabledon}
                o onChange={handleDisabledOnChange}
              ></input>
            </div>

            <div className="flex">
              <div className="w-[156px] h-[30px] absolute top-[660px] left-[284px]">
                <h1 className="font-Poppins text-[#214082] font-medium text-[15px] leading-[22.5px]">
                  Public access<span className="required ml-[1px] text-red-500">*</span>
                </h1>
              </div>

              <div className="w-[36px] h-5 absolute top-[660px] left-[504px]">
                <Switch onChange={toggler3} checked={publicAccess} />
              </div>

              <div className="w-[174px] h-[30px] absolute top-[660px] left-[820px]">
                <h1 className="font-Poppins text-[#214082] font-medium text-[15px] leading-[22.5px]">
                  Quiz total marks<span className="required ml-[1px] text-red-500">*</span>
                </h1>
              </div>

              <div className="absolute top-[653px] left-[1020px]">
                <input
                  className="rounded-lg w-[156px] h-[35px] flex border-solid border-[#B8BBC2] border-[1.8px]
              text-black text-[15p] font-medium  px-4"
                  placeholder="Total marks"
                  value={quiztotalmarks}
                  onChange={(e) => setquiztotalmarks(e.target.value)}
                ></input>
              </div>
            </div>
            </div>
            <div className="relative w-[150.68px] h-[37.09px] left-[650.43px] top-[650px] rounded-[10px] bg-[#1E4DE9]">
      <label
        htmlFor="fileInput"
        className="font-Poppins font-medium text-[15px] leading-[22.5px] flex items-center px-4 py-2 text-white cursor-pointer"
      >
        <div className="relative group">
          <span className="block truncate max-w-[60px]">
            {uploadedFile ? uploadedFile.name : 'Select'}
          </span>
          {uploadedFile && (
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max p-2 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {uploadedFile.name}
            </span>
          )}
        </div>
        <input
          id="fileInput"
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="hidden"
        />
        <img
          className="w-[24px] h-[24px] ml-4 -rotate-90"
          src={Next}
          alt="Next"
        />
        <img
          className="w-[20.48px] h-[24.96px] ml-1"
          src={PDF}
          alt="PDF"
        />
      </label>

      {/* <button
        className="w-[98px] h-[32px] font-Poppins text-[#214082] font-medium text-[15px] leading-[20px] rounded-[10px] bg-[#1E4DE9] text-white mt-9 ml-5"
        onClick={handleNext}
      >
        Submit
      </button> */}
      <div className="absolute w-[137.09px] h-[9.05px] top-[725.11px] -mt-[680px] left-[10px]">
        <Line percent={uploadProgress} strokeWidth={5} strokeColor="#B1FB9B" />
        <h1 className="font-Poppins text-[#214082] font-normal text-[10px] leading-[15px]  mt-1 ml-8">
          {`Uploading ${uploadProgress}%`}
        </h1>
      </div>
    </div>
            <div className="w-[98px] h-[37px] absolute top-[755px] left-[1182px] rounded-[10px] bg-[#1E4DE9]">
              <button
                // href="./enter-quiz"
                onClick={handleNext1}
                className="font-Poppins font-medium text-[15px] leading-[29.5px] flex justify-start px-4 py-1 text-white"
              >
                Next
                <img
                  className="w-[24px] h-[24px] ml-4"
                  alt="next icon"
                  src={Next}
                />
              </button>
            </div>
          </main>
        )}
        {showRegistrationSuccess && (
          <main className="w-max-auto">
            <div className="w-[848px] h-[44px] absolute top-[90px] left-[298px]">
              <h1 className="font-Poppins font-bold text-[30px] leading-[45px] text-orange-400">
                Create / Edit your Quiz 
              </h1>
              <h1 className="font-Poppins font-medium text-[12px] leading-[18px] text-[#214082]">
                Enter all your questions, options, and answers
              </h1>
            </div>

            {/* Questions and options */}
            <div className="absolute top-[210px] left-[298px] w-[1212px] h-[450px] ">
            <div className=" flex  items-center mb-[10px] pr-[40px] ">
              {/* <div className="ml-[-20px] mr-[5px]" >
        <input 
          type="checkbox"
          checked={isAllSelected}
          onChange={handleSelectAll}
        />
        <label className="ml-[5px] font-normal text-[#214082]">Select</label>
      </div> */}
                <div >
            {selectedQuestions.length > 0 && (
        <button
          onClick={handleDeleteSelected}
          className="  text-black p-2 text-[14px] rounded-full  flex justify-center items-center gap-[3px]"
        >
           <RiDeleteBinLine className=" text-orange-500 w-[20px] h-[20px] ml-[-5px]"  /> <span className=" text-[#214082]">Delete</span>
        </button>
      )}
      </div>
  
      </div>
              {questions.map((question, questionIndex) => (
                <div key={questionIndex} className="mb-8 ">
                  {/* Input field for question */}
                  <div className="flex items-center mb-4">
                  <input
    className="ml-[-20px] mr-[5px] mt-1 flex justify-center text-center"
            type="checkbox"
            checked={selectedQuestions.includes(questionIndex)}
            onChange={() => toggleQuestionSelection(questionIndex)}
          />
                    <div className="mr-2 text-xl font-bold text-[#214082]">
                      {questionIndex + 1}.
                    </div>
                    <input
                      type="text"
                      placeholder={`Question`}
                      className="w-[70%] h-[40px] font-bold text-[#214082] rounded-[5px] border-solid border-[#B8BBC2] border-[1.8px] p-[10px] text-[14px]"
                      value={question.question_text}
                      onChange={(e) => {
                        const newQuestions = [...questions];
                        newQuestions[questionIndex].question_text =
                          e.target.value;
                        setQuestions(newQuestions);
                      }}
                    />

                    {/* Input field for question weightage */}
                    <input
                      type="number"
                      placeholder="Marks"
                      className="w-[85px] h-[40px] rounded-[5px] border-solid border-[#B8BBC2] border-[1.8px] mx-2 p-[10px] font-normal"
                      value={question.question_weightage}
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        const updatedQuestions = questions.map((q, index) => {
                          if (index === questionIndex) {
                            return { ...q, question_weightage: value };
                          }
                          return q;
                        });
                        setQuestions(updatedQuestions);
                      }}
                    />

                    {/* Input field for question duration */}
                    <input
                      type="text"
                      hidden
                      placeholder="Duration"
                      className="w-[130px] h-[40px] rounded-[5px] border-solid border-[#B8BBC2] border-[1.8px] mr-2 p-[10px] font-normal"
                      value={question.question_duration}
                      onChange={(e) => {
                        const value = parseInt(e.target.value) * 60;
                        const updatedQuestions = [...questions];
                        updatedQuestions[questionIndex].question_duration =
                          value;
                        setQuestions(updatedQuestions);
                      }}
                    />
                  
                  <RiDeleteBinLine onClick={() => {
          const newQuestions = questions.filter((_, index) => index !== questionIndex);
          setQuestions(newQuestions);
        }}  
        className="w-[25px] h-[25px] text-orange-500"
/>
                    {/* <input
  type="number"
  placeholder="Duration"
  className="w-[130px] h-[37px] rounded-[10px] border-solid border-[#B8BBC2] border-[1.8px] mr-2 p-[10px] font-normal"
  value={question.question_duration}
  onChange={(e) => {
    const value = parseInt(e.target.value); // Parse input value to integer
    if (!isNaN(value)) { // Check if value is a valid number
      const updatedQuestions = questions.map((q, index) => {
        if (index === questionIndex) {
          return { ...q, question_duration: value };
        }
        return q;
      });
      setQuestions(updatedQuestions);
    }
  }}
/> */}
                  </div>
                  {/* Input fields for options */}
                  {getOptions(question.options).map((option, optionIndex) => (
              <div key={optionIndex} className="flex items-center mb-2">
                <div className="mr-2 text-xl font-normal" style={{
                  width: '40px',
                  marginRight: '10px',
                  padding: '5px',
                  textAlign: 'center' ,
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  backgroundColor: '#f9f9f9',
                  justifycontent: 'center',
                  display: 'flex',
                  alignitems: 'center',
                 justifyContent:"center",
                 fontSize:"14px"
                }}>
                 {String.fromCharCode(97 + optionIndex).toUpperCase()}
                </div>
                <input
                  type="text"
                  placeholder="Option Text"
                  className="w-[836px]  rounded-[5px] border-solid border-[#B8BBC2] border-[1.8px] mr-2 p-[10px] font-normal text-[12px]"
                  value={option.answer_option_text}
                  onChange={(e) => handleOptionChange(questionIndex, optionIndex, e.target.value)}
                />
                <button
                  className={`mr-2 ${option.correct_answer_flag ? "bg-green-500" : "bg-gray-300"} rounded-full w-10 h-[20px] transition-colors duration-300 focus:outline-none`}
                  onClick={() => handleToggleButton(questionIndex, optionIndex)}
                >
                  <span
                    className={`block ${option.correct_answer_flag ? "translate-x-5" : "translate-x-0"} transform -translate-y-1.5 w-[18px] h-[18px] relative top-[6px] bg-white rounded-full shadow-md transition-transform duration-300`}
                  ></span>
                </button>
              </div>
            ))}
                </div>
              ))}
              <div className=" flex justify-between items-center pr-[330px] ">
                <button
                  className="w-[123px] h-[32px] rounded-[10px] bg-[#1E4DE9] text-white  hover:bg-[rgb(239,81,48)] transform hover:scale-105 transition duration-200"
                  onClick={handleNext2}
                >
                  Back
                </button>

                <button
                  className="w-[123px] h-[32px] rounded-[10px] bg-[#1E4DE9] text-white  hover:bg-[rgb(239,81,48)] transform hover:scale-105 transition duration-200"
                  onClick={handleNext4}
                >
                  Save 
                </button>
              </div>
            </div>

            {/* Submit button */}
          </main>
        )}
      </div>
    </>
  );
}
