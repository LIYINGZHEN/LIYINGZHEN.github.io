---
title:       "Testing in Go"

description: " "
date:        2019-01-13T08:50:00+01:00
author:      "Max"
published:   true

tags:        ["golang", "testing"]
---

- Source files and associated test files are placed in the same package/folder
- The name of the test file for any given source file is `<source-file-name>_test.go`
- Test functions need to have the "Test" prefix, and the next character in the function name should be capitalized

```go
func TestSearchHandlerReturnsBadRequestWhenBlankSearchCriteriaIsSent(t *testing.T) {
  handler := SearchHandler{}
  data, _ := json.Marshal(searchRequest{})

  request := httptest.NewRequest("POST", "/search", bytes.NewReader(data))
  response := httptest.NewRecorder()
  handler.ServeHTTP(response, request)

  if response.Code != http.StatusBadRequest {
    t.Errorf("Expected BadRequest got %v", response.Code)
  }
}
```
