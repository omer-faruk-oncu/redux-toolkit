import { configureStore } from "@reduxjs/toolkit"
import loginReducer from "../features/loginSlice"
import newsReducer from "../features/newsSlice"

export const store = configureStore({
  reducer: {
    login: loginReducer,
    news: newsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  //? eger gelistirme asamasi production ise o zaman yukaridaki ifade false dondurur ve dolayisiyla devTool kullanima kapali olur.
})
