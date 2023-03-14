import { Button, TextField } from "@mui/material";


export default function Login() {
  return (
    <>
      <div className="pt-20 flex justify-center items-center">
        <div className="w-[30rem] h-96 flex items-center flex-col">
          <div className="pt-7 pl-5 text-lg w-full">
            <div>账号</div>
            <div className="pt-3 pr-5">
              <TextField className="w-full" label="请输入账号" variant="outlined" />
            </div>
            <div className="pt-10">密码</div>
            <div className="pt-3 pr-5">
              <TextField className="w-full" label="请输入密码" variant="outlined" />
            </div>
          </div>
          <div className="p-5 pt-7 w-full text-lg font-bold">
            <Button variant="contained" className="bg-black hover:bg-slate-500 w-full">登录</Button>
          </div>
        </div>
      </div>
    </>
  );
}
