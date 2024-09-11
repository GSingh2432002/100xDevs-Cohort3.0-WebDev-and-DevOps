# What is Git?
Git is a free and open source version control system.

## What is a Version Control System?
A Version Control System (VCS) is a system that keeps track of files or projects. It allows you to:
- Revert selected files to a previous state
- Revert the entire project to a previous state
- Compare changes over time
- See who last modified something, which helps in diagnosing problems

### Two Types of VCS:
1. **Centralized VCS**: In this system, there is a centralized server used to access or make changes to the code. It helps in backing up, tracking, and synchronizing files.
2. **Distributed VCS**: A Distributed Version Control System (DVCS) brings a local copy of the complete repository to each team member's computer. They can commit, branch, and merge locally. The server only needs to store differences between commits, not the full history. Users can work offline and push changes to the main branch or GitHub repository when online.

## What is a Local Repository?
Every VCS tool provides a private workspace as a working copy. Developers make changes in their private workspace and, after committing, these changes become part of the repository. Git further provides a private copy of the entire repository, allowing users to perform operations such as adding, removing, renaming, moving files, and committing changes.

## Working Directory and Staging Area (Index)
The staging area or index is an intermediate area where commits can be formatted and reviewed before completing the commit.

## Basic Workflow of Git
1. Modify a file in the working directory.
2. Add these files to the staging area.
3. Perform a commit operation to move the files from the staging area to the Git repository. After a push operation, changes are permanently stored in the Git repository.

## Git Objects
### Blobs
Blob stands for Binary Large Object. Each version of a file is represented by a blob. A blob holds the file data but does not contain metadata about the file. It is a binary file, named in the Git database by the SHA1 hash of the file. In Git, files are content-addressed, not name-addressed.

### Trees
A tree is an object that represents a directory. It holds blobs and other sub-directories. A tree is a binary file that stores references to blobs and trees, also named by the SHA1 hash of the tree object.

### Commits
- A commit holds the current state of the repository and is also named by a SHA1 hash.
- A commit object is a node in a linked list.
- Each commit object has a pointer to the parent commit object.
- From a given commit, you can traverse back by looking at the parent pointer to view the commit history.
- If a commit has multiple parent commits, it was created by merging two branches.

## Git Commands
- `git init`: Initializes a Git repository in the current folder. Git creates a hidden folder to track changes.
- `git clone <repository URL>`: Clones a repository from a remote location (e.g., GitHub) to your local machine.
- `git add index.html`: Stages the file for the next commit.
- `git add --all`: Stages all changes to files.
- `git commit -m "message"`: Commits the staged changes with a message describing the changes.
- `git push`: Uploads your commits to a remote repository (e.g., GitHub).
- `git pull`: Downloads changes from a remote repository to your local repository.
- `git status`: Shows the status of all files.
- `git remote add origin <Remote URL>`: Adds a remote repository with the specified URL as the origin of your local Git repo.
- `git remote -v`: Displays the URLs of the remote repositories.
- `git add .`: Stages all changes in the working directory.
- `git log --merge`: Lists commits causing conflicts.
- `git diff`: Shows differences between states of repositories or files.
- `git checkout`: Undoes changes to the working directory and staging area.
- `git reset --mixed`: Undoes changes to the working directory and staging area.
- `git merge --abort`: Exits the merge process and returns to the state before the merge began.
- `git reset`: Resets conflicted files to their original state during a merge conflict.
