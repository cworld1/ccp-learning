$directory = "D:\Note\ccp"  # 替换为你的目录路径

# 获取指定目录下的所有 .md 文件
$files = Get-ChildItem -Path $directory -Filter "*.md" -File

# 对每个文件进行处理
foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName

    # 检查文件是否有内容
    if ($content.Count -gt 0) {
        # 获取第一行内容
        $firstLine = $content[0]

        # 如果第一行以 "## " 开头，则替换为 "# "
        if ($firstLine -match "^## ") {
            $content[0] = $firstLine -replace "^## ", "# "
            
            # 将修改后的内容写回文件
            $content | Set-Content -Path $file.FullName
        }
    }
}
