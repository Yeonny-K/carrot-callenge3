"use server"; //⭐⭐서버단인 거 잊어먹으면 안 됨!!


    //⭐⭐⭐서버 로그인 방식!
    //⭐⭐⭐data 받아오는 방식 formData: FormData!
    //⭐⭐⭐useFormState에는 초기값이 필요하기 때문에 두 인자 모두 초기값 지정해주기
    export const handleForm = async (prevState:any, formData: FormData) => {

        const inputPw = formData.get("password");
        if(inputPw === '12345'){
            return {
                errors: [],
            };
        } else {
            return {
                errors: ["wrong password"],
            };
        }       
    }