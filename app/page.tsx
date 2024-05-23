"use client";


import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import { useFormState } from "react-dom";
import { handleForm } from "./actions";
import { EnvelopeIcon, KeyIcon, UserIcon } from "@heroicons/react/16/solid";


export default function Login(){

    //⭐⭐이렇게 하는 이유. 서버에서 받아온 걸 다시 클라이언트에게 줘야 하는데 한 컴포넌트 안에 서버, 클라이언트가 동시에 존재할 수 없음
    //⭐⭐그래서 이렇게 여기는 클라이언트로, actions.ts 만들어서 거기는 서버로 분리해서 사용해주고 
    //⭐⭐import해서 넣어주기
    const [state, action] = useFormState(handleForm, null);
    return (
        //⭐제일 상위 div에 gap-10을 주어서 모든 자식 요소마다 띄워지게 만들어주기
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 mt-20 *:font-medium">
                <h1 className="text-center text-2xl">🔥</h1>
            </div>
            
            {/* ⭐⭐⭐ handleForm 사용하는 방법! form에 action 넣어주기 */}
            <form action={action} className="flex flex-col gap-3">
                {/* ⭐⭐form-input 컴포넌트 써먹어주는데, 필요한 것만 쓰고 나머지 버리기*/}
              
                <FormInput
                // ⭐⭐⭐ input에 이름 지어주기
                name="email"
                type="email"
                placeholder="Email"
                required
                errors={[]}>
                <span className="mr-2"><EnvelopeIcon className="h-4 w-4"/></span>
                </FormInput>

                <FormInput
                // ⭐⭐⭐ input에 이름 지어주기
                name="username"
                type="name"
                placeholder="Username"
                required
                errors={[]}>
                <span className="mr-2"><UserIcon className="h-4 w-4"/></span>
                </FormInput>

                <FormInput
                // ⭐⭐⭐ input에 이름 지어주기
                name="password"
                type="password"
                placeholder="Password"
                required
                errors={state?.errors ?? []}>
                <span className="mr-2"><KeyIcon className="h-4 w-4"/></span>
                </FormInput>

                {/* ⭐⭐form-btn 컴포넌트 써먹어주기, 이 컴포넌트 안에는 pending 체크 훅이 있다!*/}
                <FormButton text="Log in" />

                {/* ⭐⭐errors의 길이를 체크해서 만약 0이라면 (error가 없다면) 네모 박스 보여주기*/}
                {state?.errors.length === 0 && (
                <div className="bg-green-500 rounded-md w-full h-10 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 ml-3 mr-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                  <h1 className="text-l font-semibold text-justify">Welcome back!</h1>
                </div>
                )}
            </form>
        </div>
    )
}