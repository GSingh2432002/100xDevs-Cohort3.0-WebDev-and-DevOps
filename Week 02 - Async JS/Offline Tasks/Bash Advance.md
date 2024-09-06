# Advance Bash

1. **pwd**
2. **ls**
3. **ls dirname**
4. **ls -l** -> Displays detailed information about each file and directory. Shows a long listing format that includes permission, number of links, owner, group, size.
5. **ls -R** -> Lists directories and their contents recursively. Displays the contents of all directories and subdirectories starting from the current directory.
6. **ls -t** -> Sorts the output by modification time. Displays files and directories with the most recently modified ones listed first.
7. **ls -la** -> Used to show hidden files.
8. **ls -s** -> Used to list directories and files by size.
9. **ls -lR | grep .extensionName** -> Used to search text for the patterns specified by the user in any folder or directory.
10. **ls *.js/extensionName** -> Used to search a pattern specified by the user inside the folder.
11. **ls ..** -> To list down all the files in that directory or folder.
12. **ls [gk*]** -> To list down all files starting with "gk".
13. **cat**
14. **cat > filename** -> Is used to insert text to display.
15. **cat >> filename** -> Is used to insert text after submitting once.
16. **mkdir test && cd test** -> To make a folder and jump to that folder.
17. **mkdir -p folderName/Name_of_the_folder_you_want_to_make** -> To create a folder structure containing multiple nested folders.
18. **mv filename.html filename.css** -> To rename a file.
19. **cp -r [filename1] [filename2]** -> To move one directory to another.
20. **rm -r filename** -> To remove a folder.
21. **chmod ugoa+-=rwx [filename]** -> Helps in setting new permissions that apply to files or directories.
    - Syntax: `chmod [options] [mode] [filename]`
    - u-owner, g-group, o-others, a-all
    - + -> add permissions, - -> remove permissions, = -> set permissions to specified values
    - r-read permission, w-write permission, x-execute permission
22. **echo 'Message to print'** -> Allows users to display lines of text that are passed as arguments.
23. **echo $PATH** -> To display the system's PATH variable.
24. **head filename** -> To display the first 10 rows of a file.
25. **tail filename** -> To display the last 10 rows of a file.
26. **head -20 filename** -> To display the first 20 rows of a file.
27. **wc filename** -> To display the count of lines and words.
28. **grep "wordToFind" filename | wc** -> Used to find occurrences of the word in a file.
29. **grep -c "wordToFind" filename** -> To print the count of lines containing the word in a file.
30. **grep -h "wordToFind" filename** -> To display the number of lines where the word is present in the file.
31. **grep -hir "wordToFind" filename** -> To find the occurrence of words in a directory.
32. **grep -hin "wordToFind" filename** -> To display the number of words and line numbers where the given word is found.
33. **grep -o "one" filename** -> Displays each occurrence of the given word.
