clear
echo Deploy to GitHub Pages
cd ..
mkdir pub 
cd pub
../tools/bin/gp.sh chuckh polymer-quill
cd ..
rm -rf pub
cd polymer-quill