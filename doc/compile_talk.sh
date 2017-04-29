#!/bin/bash

if [ ! -f "reveal.js" ] ; then
	echo "please install reveal.js: git clone https://github.com/hakimel/reveal.js.git"
fi

if [ -z "$thm" ] ; then
thm=white
thm=sky
thm=moon
fi

pdopt="--slide-level 2 --toc-depth=1"

if [ -z "$@" ] ; then
	mdfiles=$(find -maxdepth 1 -name '*.md')
else
	mdfiles="$@"
fi

for mdf in $mdfiles
do
	outfile="${mdf}.html"
	pandoc -s -S --toc -V theme=$thm $pdopt -t revealjs -f markdown+autolink_bare_uris+lists_without_preceding_blankline -o "$outfile" "$mdf"
	if [ "$thm" == "ltz" ] ; then
		# patch the LTZ bar div into file
		sed -i -e 's|<div class="slides"|<div class="leftlogocontainer"></div><div class="slides"|' "$outfile"
	fi
done

