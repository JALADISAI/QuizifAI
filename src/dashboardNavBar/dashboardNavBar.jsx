// import { useEffect, useState } from 'react';
// import profileimg from "../assets/Images/images/profile/profileImage.png";
// import Camera from "../assets/Images/images/profile/Camera.png";

// export default function Dashboard() {
//     // Mock data - replace with your actual data
//     const [userData, setUserData] = useState({
//         name: "Samantha S",
//         occupation: "Professional",
//         userId: "809",
//         city: "New York",
//         district: "Manhattan",
//         country: "USA",
//         globalRank: "156",
//         globalScore: "850",
//         totalQuizzes: "25",
//         totalMinutes: "320",
//         averageScore: "85",
//         subscription: {
//             type: "Public",
//             startDate: "2024-01-01",
//             remainingDays: "30"

//         }
//     });
//     const handleImageClick = () => {
//         if (inputRef.current) {
//             inputRef.current.click();
//         }
//     };
//     const handleImageChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setSrc(reader.result);
//                 setModalVisible(true);
//             };
//             reader.readAsDataURL(file);
//         }
//     };
//     const onImageLoaded = (image) => {
//         imageRef.current = image;
//         return false; // Prevent auto cropping
//     };
//     const handleCropComplete = (crop) => {
//         if (src && crop.width && crop.height) {
//             const image = document.createElement('img');
//             image.src = src;
//             image.onload = () => {
//                 const canvas = document.createElement('canvas');
//                 const scaleX = image.naturalWidth / image.width;
//                 const scaleY = image.naturalHeight / image.height;
//                 canvas.width = crop.width;
//                 canvas.height = crop.height;
//                 const ctx = canvas.getContext('2d');
//                 ctx.drawImage(
//                     image,
//                     crop.x * scaleX,
//                     crop.y * scaleY,
//                     crop.width * scaleX,
//                     crop.height * scaleY,
//                     0,
//                     0,
//                     crop.width,
//                     crop.height
//                 );
//                 setCroppedImage(canvas.toDataURL());
//             };
//         }
//     };

//     const handleSubmit = () => {
//         if (croppedImage) {
//             setImage(croppedImage);
//             localStorage.setItem('savedImage', croppedImage);
//             setModalVisible(false);
//         }
//     };

//     const handleDeleteImage = () => {
//         localStorage.removeItem('savedImage');
//         setImage('');
//     };
//     function handleReplaceImage(event) {
//         event.stopPropagation(); // Prevent the click from triggering the parent div's click event
//         handleImageClick(); // Open file dialog
//     }
//     function handleViewImage(event) {
//         event.stopPropagation(); // Prevent the click from triggering the parent div's click event
//         if (image) {
//             // Create a temporary link element
//             const link = document.createElement('a');
//             link.href = image;
//             link.target = '_blank'; // Open in a new tab
//             link.click(); // Simulate click to open the image
//         } else {
//             console.error('No image available to view');
//         }
//     };

//     return (
//         <div className="container mx-auto p-4">
//             <div className="grid grid-cols-2 gap-4 mb-4">

//                 <div className="flex flex-col items-center relative ml-[-82%] mr-4 border border-[#dddddd] rounded-sm p-2 h-64 w-40">
//                     <div className="relative">
//                         <img
//                             className="h-40 w-40 object-cover"
//                             src={profileimg}
//                             alt="Profile"
//                             style={{ height: '100px', width: '100px' }}
//                         />
//                         {/* <img
//                             className="absolute left-11 bottom-5 h-10 w-10"
//                             src={Camera}
//                             alt="Camera"
//                             onClick={handleImageClick}
//                         /> */}
//                     </div>
//                     <div className="mt-2 text-center">
//                         <h2 className="text-[16px] font-semibold text-[#214082] font-family-[lato]">
//                             {userData.name}
//                         </h2>
//                         <p className="text-[14px] text-[#214082] font-400 font-family-[lato]">{userData.occupation}</p>
//                         <p className="text-sm text-[#FF6701]">User ID: {userData.userId}</p>
//                     </div>
//                 </div>
//                 {/* Quizzes Box */}



//                 <div className="flex flex-col items-center relative ml-[-111%] mr-4 border border-[#dddddd] rounded-sm p-2 h-64 w-40 ">
//                     <div className="text-center">
//                         <h3 className="text-[16px] font-[500] text-[#214082] mb-2">Quizzes</h3>
//                         <p className="text-2xl font-bold text-orange-500">{userData.totalQuizzes}</p>
//                     </div>
//                     <div className="text-center my-4">
//                         <h3 className="text-[16px] font-[500] text-[#214082] mb-2">Minutes</h3>
//                         <p className="text-2xl font-bold text-orange-500">{userData.totalMinutes}</p>
//                     </div>
//                     <div className="text-center">
//                         <h3 className="text-[16px] font-[500] text-[#214082] mb-2">Average Score</h3>
//                         <p className="text-2xl font-bold text-orange-500">{userData.averageScore}%</p>
//                     </div>
//                 </div>

//             </div>



//             <div className="grid grid-cols-2 gap-4">
//                 {/* Global Stats Box */} 
//                   <div className="bg-white rounded-lg shadow p-4">
//                     <h3 className="text-lg font-bold mb-4">Global Rank</h3>
//                     <div className="space-y-4">
//                         <div>
//                             <p className="text-sm text-gray-600">Global Rank</p>
//                             <p className="text-2xl font-bold text-blue-500">#{userData.globalRank}</p>
//                         </div>
//                         <div>
//                             <p className="text-sm text-gray-600">Global Score</p>
//                             <p className="text-2xl font-bold text-blue-500">{userData.globalScore}</p>
//                         </div>
//                     </div>
//                 </div> 
//                 {/* <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-sm">
//                     <div className="flex items-center mb-2">
//                         <ArrowUp className="w-6 h-6 text-green-500 mr-2" />
//                         <span className="text-3xl font-bold">{percentage}%</span>
//                     </div>
//                     <p className="text-sm text-muted-foreground mb-4">Google Rankings</p>
//                     <div className="space-y-2">
//                         <div>
//                             <p className="text-sm text-muted-foreground">Global Rank</p>
//                             <p className="text-xl font-semibold">#{globalRank}</p>
//                         </div>
//                         <div>
//                             <p className="text-sm text-muted-foreground">Global Score</p>
//                             <p className="text-xl font-semibold">{globalScore}</p>
//                         </div>
//                     </div>
//                 </div> */}

//                 {/* Subscription Box */}
//                 <div className="bg-white rounded-lg shadow p-4">
//                     <h3 className="text-lg font-bold mb-4">Subscription Details</h3>
//                     <div className="space-y-2">
//                         <div className="flex justify-between">
//                             <p className="text-sm text-gray-600">Type:</p>
//                             <p className="font-medium">{userData.subscription.type}</p>
//                         </div>
//                         <div className="flex justify-between">
//                             <p className="text-sm text-gray-600">Start Date:</p>
//                             <p className="font-medium">{userData.subscription.startDate}</p>
//                         </div>
//                         <div className="flex justify-between">
//                             <p className="text-sm text-gray-600">Days Remaining:</p>
//                             <p className="font-medium">{userData.subscription.remainingDays}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }




import { useEffect, useState } from 'react';
// import { ArrowUp } from "lucide-react"
import profileimg from "../assets/Images/images/profile/profileImage.png";

export default function Dashboard() {
    const [userData, setUserData] = useState({
        name: "Samantha S",
        occupation: "Professional",
        userId: "809",
        city: "New York",
        district: "Manhattan",
        country: "USA",
        // globalRank: "1",
        globalScore: "15626",
        totalQuizzes: "25",
        totalMinutes: "320",
        averageScore: "85",
        subscription: {
            type: "Public",
            startDate: "2024-01-01",
            remainingDays: "30"
        }
    });

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col items-center relative ml-[-82%] mr-4 border border-[#dddddd] rounded-sm p-2 h-64 w-40">
                    <div className="relative">
                        <img
                            className="h-40 w-40 object-cover"
                            src={profileimg}
                            alt="Profile"
                            style={{ height: '100px', width: '100px' }}
                        />
                    </div>
                    <div className="mt-2 text-center">
                        <h2 className="text-[16px] font-semibold text-[#214082] font-family-[lato]">
                            {userData.name}
                        </h2>
                        <p className="text-[14px] text-[#214082] font-400 font-family-[lato]">{userData.occupation}</p>
                        <p className="text-sm text-[#FF6701]">User ID: {userData.userId}</p>
                    </div>
                </div>

                <div className="flex flex-col items-center relative ml-[-111%] mr-4 border border-[#dddddd] rounded-sm p-2 h-64 w-40 ">
                    <div className="text-center">
                        <h3 className="text-[16px] font-[500] text-[#214082] mb-2">Quizzes</h3>
                        <p className="text-2xl font-bold text-orange-500">{userData.totalQuizzes}</p>
                    </div>
                    <div className="text-center my-4">
                        <h3 className="text-[16px] font-[500] text-[#214082] mb-2">Minutes</h3>
                        <p className="text-2xl font-bold text-orange-500">{userData.totalMinutes}</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-[16px] font-[500] text-[#214082] mb-2">Average Score</h3>
                        <p className="text-2xl font-bold text-orange-500">{userData.averageScore}%</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-sm ml-[181%] -mt-[127%] h-[261px]">
                    <div className="mb-2 ml[-61%]">
                        <p className="text-sm text-muted-foreground text-16px font-weight-500 text-[#214082]">Global Rank</p>
                        <span className="text-5xl font-bold text-[#FF6701] ml-[13%]">1</span>
                    </div>
                    <div className="space-y-2">
                        <div>

                            <p className="text-xl font-semibold">{userData.globalRank}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground font-weight-500 text-[#214082] text-16px ml-[19% ">Global Score</p>
                            <p className="text-xl font-semibold text-[#FF6701] font-weight-500 ">{userData.globalScore}</p>


                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-4 ml-[185%]  w-[70%] mt-[-124%] h-[261px]">
                    <h3 className="text-lg font-bold mb-4 text-[#214082]">Subscription Details</h3>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <p className="text-sm text-gray-600 text-[#214082]">Type:</p>
                            <p className="font-medium">{userData.subscription.type}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-sm text-gray-600 text-[#214082]">Date:</p>
                            {/* <p className="font-medium">{userData.subscription.startDate}</p> */}
                        </div>
                        <div className="flex justify-between">
                            <p className="text-sm text-gray-600 mr-31%">Days Remaining:</p>
                            <p className="font-medium">{userData.subscription.remainingDays}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}