# React Native Unhandled Promise Rejection Before Component Mount

This repository demonstrates a common issue in React Native applications: attempting to access component state or props before the component has fully mounted.  This often leads to unexpected behavior, crashes, or unhandled promise rejections.

## Problem

The `bug.js` file shows a component that fetches data from an API. It attempts to render the data before the fetch operation is complete, resulting in an error because `this.state.data` is null.

## Solution

The `bugSolution.js` file provides a solution by using the conditional rendering pattern to gracefully handle the loading state.  The component only renders the data after it has been fetched successfully.