# Git & Github

git commands

## some commands

1. cd : change directory,
2. ls : list file (shows all file inside folder which are not hidden),
3. ls -a : list file (shows all files, hidden or not hidden both),
4. mkdir name : making new directory,
5. clear : to clear terminal

## git configure

1. git config --global user.name "github username"
2. git config --global user.email "github email"
3. git config --list

## Commands Available

Some script shown below

1. for ininilization: git init
2. for remote repository: git remote add origin https:// github.com/Dikshit673/my-portfolio.git
3. for checking remote repository: git remote -v
4. for checking branch name: git branch
5. for navigate in branches: git checkout branchName
6. to create new branch: git checkout -b newBranchName
7. to delete branch:git checkout -d branchName
8. to rename branch (like default master to main): git branch -M main
9. to commit branches,files and more: git diff branchName
10. to merge branches(on standing branch to branchName): git merge BranchName
11. to set origin to default (for long time,next time just use "git push"): git push -u origin main
12. to pull from remote to local: git pull origin main
13. for clone: git clone https:// github.com/Dikshit673/my-portfolio.git
14. to check all commit: git log

## for usage commands (only main commands)

1. for status: git status
2. for adding: git add .
3. for commit: git commit -m "message of commit"
4. for push: git push origin main

## type of state in status

1. Untracked (U): for new files,
2. Modified (M): for modified files,
3. Staged (U -> A, M -> M): those files which are added & ready to be commited,
4. unmodified (): no change in file.

## for undoing change

for resetting things.

### for staged

1. to reset only one or two file: git reset fileName
2. to reset all files: git reset

### for commit changes (only 1 commit)

1. if one commited: git reset HEAD~1

### for commit changes (for many commit)

1. if many commited: git reset commitHash
2. if many commited (to changes from git as well as vs code): git reset --hard commitHash
