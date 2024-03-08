import { app } from "@/firebase/firebase.config";
import { getAuth} from "firebase/auth";
export default function Home() {
  const auth = getAuth(app);
  console.log(auth)
  return (
    <div>
      Hello world
    </div>
  );
}
