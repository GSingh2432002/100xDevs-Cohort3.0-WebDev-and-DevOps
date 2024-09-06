Advance Bash:-
1. pwd
2. ls
3. ls dirname
4. ls -l -> Displays detailed information about each file and directory. Shows a long listing format that includes persmission, number of links, owner, group, size
5. ls -R -> Lists directories and their contents recursively. Displays the contents of all directories and subdirectories starting from current directory
6. ls -t -> Sorts the output by modification time. Displays files and directories with the most recently modified ones listed first
7. ls -la -> used to show hidden files
8. ls -s -> used to list directory and files by size
9. ls -lR | grep .extensionName -> used to search text for the patterns specified by the user in any folder or directories
10. ls *.js/extensionName -> used to search pattern specified by the user inside the folder
11. ls .. -> to list down all the files in that directory or folder
12. ls [gk*] -> to list down all files that starting from gk
13. cat 
14. cat > filename -> is used to insert text to display
15. cat >> filename -> is used to insert text after submitting once
16. mkdir test && cd test -> to make folder and jump to that folder
17. mkdir -p folderName/Name of the folder you want to make -> to make a folder which contains lot of folders like Website folder
18. mv filename.html filename.css -> to rename a file
19. cp -r [filename1] [filename2] -> to move one directory to another directory
20. rm -r filename -> to remove folder
21. chmod ugoa+-=rwx [filename] -> helps in  setting new permissions that have to be applied to files or directories
    syntax -> chmod [options] [mode] [filename]
    u-owner, g-group, o-others, a-all
    +-add permissions, --remove permissions, =-set permissions to the specified values
    r-read persmission, w-write permission, x-execute permission
22. echo 'Message to print' -> allows users to display lines of text thata are passed as arguments
23. echo $PATH -> to show display the path
24. head filename -> to display first 10 rows of that particular file
25. tail filename -> to display the last 10 rows of that particular file
26. head -20 filename -> to display the first 20 rows of that particular file
27. wc filename -> to display the count of lines, words
28. grep "wordTOFind" filename | wc -> used to find occurence of the word in the file
29. grep -c "wordToFind" filename -> to print the count of lines in the file
30. grep -h "wordToFind" filename -> to the number of lines where the word is present in the file
31. grep -hir "wordToFind" filename -> to find the occurence of word that are present in the directory
32. grep -hin "wordToFind" filename -> to display the number of words and lines number of the given word
33. grep -o "one" filename -> display the given word that are matched