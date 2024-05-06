import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  newsData: [],
  loading: false,
  error: false,
}

export const getNews = createAsyncThunk(
  "getNews", //? action type
  async () => {
    //? api istek fonksiyonu
    const API_KEY = "1a1a999e0d7240a6bd2dead87bcca78e"
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    const { data } = await axios(url)
    console.log(data.articles)
    return data.articles
  }
)

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNewsData: (state) => {
      state.newsData = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getNews.fulfilled, (state, { payload }) => {
        state.loading = false
        state.newsData = payload
      })
      .addCase(getNews.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  },
})

export const { clearNewsData } = newsSlice.actions

export default newsSlice.reducer
