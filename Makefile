
update: #$(JEMDOCPARTS)
# 	conda activate env
	jemdoc index.jemdoc
	jemdoc research.jemdoc
	jemdoc coursework.jemdoc	
	jemdoc resume.jemdoc		
	jemdoc misc.jemdoc		
	scp *.html youngsuk@rice.stanford.edu:afs-home/WWW/
# 	conda deactivate
# update_papers: 

# update_resume: 
# 	scp ypark_resume.pdf youngsuk@rice.stanford.edu:afs-home/WWW/


update_cv: 
	scp ypark_cv.pdf youngsuk@rice.stanford.edu:afs-home/WWW/


