# History of Git

###### Git traces its roots to the open source software project Linux kernel. Developers of this project began using a DVCS called BitKeeper in 2002. In 2005, many of these developers stopped using this DVCS due to tension between the Linux kernel community and the company behind BitKeeper’s and the eventual revocation of the DVCS’ gratis status. Subsequently, Linus Torvalds, the chief architect of the Linux kernel, began creating Git. With the intention of creating a DVCS with a workflow design similar to that of BitKeeper, which was also fast, Git allowed for non-linear development via multiple branches, could support large projects, possessed strong mechanisms preventing corruption, and had a simple design. Since its inception in 2005, Git has become one of the most utilized Version Control Systems in the world.

## You can download Git by visiting this link and following the posted directions:




  | [link to git app](http://git-scm.com/download/win)     | main 

### You can try installing Git via your distribution’s inherent package management tool.


### $ sudo yum install git

### To start tracking these repository files, perform an initial commit by typing the following:

### $ git add *.c
### $ git add LICENSE
### $ git commit -m “any message here”

##### You can also create a copy of an existing Git repository from a particular server by using the clone command with a repository’s URL:

### $git clone https://github.com/test

### $ git commit -a
### $ git push origin master

