import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  newsData: [],
  loading: false,
  error: false,
};

export const getNews = createAsyncThunk("getNews", async () => {
  const API_KEY = "8758828dc44846b1848e4464770d54aa";
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  const {data} = await axios(url);
  console.log(data.articles);
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder)=>{

    builder
    .addCase(getNews.pending, (state, action)=>{
        state.loading = true
    })
    .addCase(getNews.fulfilled, (state, {payload})=>{
        state.loading = false
        state.newsData = payload
    })

  }
});

export const {} = newsSlice.actions;

export default newsSlice.reducer;
