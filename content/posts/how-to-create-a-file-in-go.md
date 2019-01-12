---
title: "How to Create a File in Go"
date: 2019-01-12T11:17:49+01:00
draft: false
---

```go
func main() {
	dest := "./posts/article1.md"
	if err := os.MkdirAll(filepath.Dir(dest), 0777); err != nil {
		fmt.Errorf(err.Error())
  }

	out, err := os.Create(dest)
	if err != nil {
		fmt.Errorf(err.Error())
	}
	defer out.Close()

	result, err := out.WriteString("writes\n")
	if err != nil {
		fmt.Errorf(err.Error())
	}
	fmt.Printf("wrote %d bytes\n", result)
}
```