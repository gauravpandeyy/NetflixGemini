import { GoogleGenerativeAI } from "@google/generative-ai"
import { GPT_KEY } from "../utils/Constants"
const genAI = new GoogleGenerativeAI(GPT_KEY)
export default genAI
