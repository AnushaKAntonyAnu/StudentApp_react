import React from 'react'
import Navbar from './Navbar'

const ViewallStudent = () => {
    return (
        <div>
            <br></br>
            <Navbar/>
            
            <h3 align="center"><u>ViewAll Student</u></h3><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card" >
                                    <img height="200px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAACUCAMAAAAu5KLjAAAAMFBMVEXk5ueutLenrrHn6eqrsbS0ubzb3t+2vL7X2tzh4+S7wMPS1de/xMbCx8nIzM6xt7lOagnvAAADuUlEQVR4nO2b23asIAxAgShXhf//24IzPVNbnQGiQddhP/WteyWTcIuMdTqdTqfT6XQ6nU6n06kCWgt8AACYlFprY9Kf1wSYm1XgCyEor68X1hhFrwYx8BeDENbJKwUVQNvxp+K36RAmeR1PqYYNyYcpt+YSomBmseP4DKm/gCi4rXSvRcf2mZ8/SS6ivq2kmXIso+fcVFPlWUbPqV3ezcef5Q9P28wyO5YPzzbxhCLLVEctPMG/bZdbOHpP0KWSEUmuyVS55aCowwmZDfOXJ/HPE2SNJecjcdqrgkm+aroqyYSh1KwMJvGv0xS3zBd0lpC1e9sJJ12Ph/pYEm5Bqhagf5D1JEzOU9aJNI1Fac5EP04ZEJacByJNjQkm54Kow3ukpqbRRFUQ2UIEqAqK0NQQjDhLTnR2wxV6bPA0msicd83/UZNmGYJ7lNBNGhK2vVNtke6xWN5l6+GQmjSWTOJqiKhtMnaPQ8ZNjmwgEZaEl3L3uE64y+UMM/WaVMffhepw0l5rV98iDaTXsHUvBPRPwbVPBKTBrC12yjJ/UrGwt3hdvcljIJTv5xo8rZZXe5uH6tJbY7IN3F8KPBtaQv4hUzQdncnNe8NYLoDPkQxNanzlqT9Opgy2/fAZA+PFO9FBXGGUjyXRie8PRk7XGYoFPW+JDmL0F8j3C2DGKbFOfhraJd63ZQAA2lulxoRS1usrzRWviGJGJgy7rGOK54rWPiuijzFSa+dnq8YwLIRR2Wn2TstLTOpHRb3oDSLZrco8IqKvjbaypSow7dNnA7vT5E9dzqOsa9LjwUhv+dvl528P1YY0qADJ8X0Qt0y5mh2VaPw3btxdHD8zU5zbYiBnjpjpStk//XeavhFBBPJblCt34n4kVnbh1PO+aTjtahv0hMr2GqFOST2w/U1lJerwTR4wX9x/PjNMxwYU5JH5/uF56FkOXDg+lE8O+6QEjD0llA8Grg8RBXlUF9rjiCsw3ExpFkdciSAfz/M8LfJoBxSW6WMN1OJJZIl9yaSyTPGszjtZLB+elWkHd2K73PCc6jRRj/s1nnX9Ezu8Ve5ZsR6hR3NrKC6jisepAyhuS8hZo0qKp2qQc3C1hKK0gyTtRS/KdiFN6udBwbGjTf0sFH0g3i6YPOTf3Zy/E96nYGiFcsvxl2zNlpJc5C6ZulE3epI5twJTU8vclR09144l6yYEN0R6AHn7Tqj/WvogzaxtPOkJaJO8U3ujzdGLrHk/Yxtb5s2omSBak/k1xO+nXGLyJDudTj5fi7gzWTQ3rFAAAAAASUVORK5CYII=" class="card-img-top" alt="...">
                                    </img> <div class="card-body">
                                           <a href="#" class="btn btn-primary">FIT-MCA1</a>
                                            <h5 class="card-title">Anusha</h5>
    
                                        </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <div class="card" >
                                    <img height="200px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAACUCAMAAAAu5KLjAAAAMFBMVEXk5ueutLenrrHn6eqrsbS0ubzb3t+2vL7X2tzh4+S7wMPS1de/xMbCx8nIzM6xt7lOagnvAAADuUlEQVR4nO2b23asIAxAgShXhf//24IzPVNbnQGiQddhP/WteyWTcIuMdTqdTqfT6XQ6nU6n06kCWgt8AACYlFprY9Kf1wSYm1XgCyEor68X1hhFrwYx8BeDENbJKwUVQNvxp+K36RAmeR1PqYYNyYcpt+YSomBmseP4DKm/gCi4rXSvRcf2mZ8/SS6ivq2kmXIso+fcVFPlWUbPqV3ezcef5Q9P28wyO5YPzzbxhCLLVEctPMG/bZdbOHpP0KWSEUmuyVS55aCowwmZDfOXJ/HPE2SNJecjcdqrgkm+aroqyYSh1KwMJvGv0xS3zBd0lpC1e9sJJ12Ph/pYEm5Bqhagf5D1JEzOU9aJNI1Fac5EP04ZEJacByJNjQkm54Kow3ukpqbRRFUQ2UIEqAqK0NQQjDhLTnR2wxV6bPA0msicd83/UZNmGYJ7lNBNGhK2vVNtke6xWN5l6+GQmjSWTOJqiKhtMnaPQ8ZNjmwgEZaEl3L3uE64y+UMM/WaVMffhepw0l5rV98iDaTXsHUvBPRPwbVPBKTBrC12yjJ/UrGwt3hdvcljIJTv5xo8rZZXe5uH6tJbY7IN3F8KPBtaQv4hUzQdncnNe8NYLoDPkQxNanzlqT9Opgy2/fAZA+PFO9FBXGGUjyXRie8PRk7XGYoFPW+JDmL0F8j3C2DGKbFOfhraJd63ZQAA2lulxoRS1usrzRWviGJGJgy7rGOK54rWPiuijzFSa+dnq8YwLIRR2Wn2TstLTOpHRb3oDSLZrco8IqKvjbaypSow7dNnA7vT5E9dzqOsa9LjwUhv+dvl528P1YY0qADJ8X0Qt0y5mh2VaPw3btxdHD8zU5zbYiBnjpjpStk//XeavhFBBPJblCt34n4kVnbh1PO+aTjtahv0hMr2GqFOST2w/U1lJerwTR4wX9x/PjNMxwYU5JH5/uF56FkOXDg+lE8O+6QEjD0llA8Grg8RBXlUF9rjiCsw3ExpFkdciSAfz/M8LfJoBxSW6WMN1OJJZIl9yaSyTPGszjtZLB+elWkHd2K73PCc6jRRj/s1nnX9Ezu8Ve5ZsR6hR3NrKC6jisepAyhuS8hZo0qKp2qQc3C1hKK0gyTtRS/KdiFN6udBwbGjTf0sFH0g3i6YPOTf3Zy/E96nYGiFcsvxl2zNlpJc5C6ZulE3epI5twJTU8vclR09144l6yYEN0R6AHn7Tqj/WvogzaxtPOkJaJO8U3ujzdGLrHk/Yxtb5s2omSBak/k1xO+nXGLyJDudTj5fi7gzWTQ3rFAAAAAASUVORK5CYII=" class="card-img-top" alt="...">
                                    </img> <div class="card-body">
                                           <a href="#" class="btn btn-primary">FIT-MCA2</a>
                                            <h5 class="card-title">Bhagya</h5>
    
                                        </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <div class="card" >
                                    <img height="200px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAACUCAMAAAAu5KLjAAAAMFBMVEXk5ueutLenrrHn6eqrsbS0ubzb3t+2vL7X2tzh4+S7wMPS1de/xMbCx8nIzM6xt7lOagnvAAADuUlEQVR4nO2b23asIAxAgShXhf//24IzPVNbnQGiQddhP/WteyWTcIuMdTqdTqfT6XQ6nU6n06kCWgt8AACYlFprY9Kf1wSYm1XgCyEor68X1hhFrwYx8BeDENbJKwUVQNvxp+K36RAmeR1PqYYNyYcpt+YSomBmseP4DKm/gCi4rXSvRcf2mZ8/SS6ivq2kmXIso+fcVFPlWUbPqV3ezcef5Q9P28wyO5YPzzbxhCLLVEctPMG/bZdbOHpP0KWSEUmuyVS55aCowwmZDfOXJ/HPE2SNJecjcdqrgkm+aroqyYSh1KwMJvGv0xS3zBd0lpC1e9sJJ12Ph/pYEm5Bqhagf5D1JEzOU9aJNI1Fac5EP04ZEJacByJNjQkm54Kow3ukpqbRRFUQ2UIEqAqK0NQQjDhLTnR2wxV6bPA0msicd83/UZNmGYJ7lNBNGhK2vVNtke6xWN5l6+GQmjSWTOJqiKhtMnaPQ8ZNjmwgEZaEl3L3uE64y+UMM/WaVMffhepw0l5rV98iDaTXsHUvBPRPwbVPBKTBrC12yjJ/UrGwt3hdvcljIJTv5xo8rZZXe5uH6tJbY7IN3F8KPBtaQv4hUzQdncnNe8NYLoDPkQxNanzlqT9Opgy2/fAZA+PFO9FBXGGUjyXRie8PRk7XGYoFPW+JDmL0F8j3C2DGKbFOfhraJd63ZQAA2lulxoRS1usrzRWviGJGJgy7rGOK54rWPiuijzFSa+dnq8YwLIRR2Wn2TstLTOpHRb3oDSLZrco8IqKvjbaypSow7dNnA7vT5E9dzqOsa9LjwUhv+dvl528P1YY0qADJ8X0Qt0y5mh2VaPw3btxdHD8zU5zbYiBnjpjpStk//XeavhFBBPJblCt34n4kVnbh1PO+aTjtahv0hMr2GqFOST2w/U1lJerwTR4wX9x/PjNMxwYU5JH5/uF56FkOXDg+lE8O+6QEjD0llA8Grg8RBXlUF9rjiCsw3ExpFkdciSAfz/M8LfJoBxSW6WMN1OJJZIl9yaSyTPGszjtZLB+elWkHd2K73PCc6jRRj/s1nnX9Ezu8Ve5ZsR6hR3NrKC6jisepAyhuS8hZo0qKp2qQc3C1hKK0gyTtRS/KdiFN6udBwbGjTf0sFH0g3i6YPOTf3Zy/E96nYGiFcsvxl2zNlpJc5C6ZulE3epI5twJTU8vclR09144l6yYEN0R6AHn7Tqj/WvogzaxtPOkJaJO8U3ujzdGLrHk/Yxtb5s2omSBak/k1xO+nXGLyJDudTj5fi7gzWTQ3rFAAAAAASUVORK5CYII=" class="card-img-top" alt="...">
                                    </img><div class="card-body">
                                           <a href="#" class="btn btn-primary">FIT-MCA3</a>
                                            <h5 class="card-title">Annamol</h5>
    
                                        </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <div class="card" >
                                    <img height="200px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAACUCAMAAAAu5KLjAAAAMFBMVEXk5ueutLenrrHn6eqrsbS0ubzb3t+2vL7X2tzh4+S7wMPS1de/xMbCx8nIzM6xt7lOagnvAAADuUlEQVR4nO2b23asIAxAgShXhf//24IzPVNbnQGiQddhP/WteyWTcIuMdTqdTqfT6XQ6nU6n06kCWgt8AACYlFprY9Kf1wSYm1XgCyEor68X1hhFrwYx8BeDENbJKwUVQNvxp+K36RAmeR1PqYYNyYcpt+YSomBmseP4DKm/gCi4rXSvRcf2mZ8/SS6ivq2kmXIso+fcVFPlWUbPqV3ezcef5Q9P28wyO5YPzzbxhCLLVEctPMG/bZdbOHpP0KWSEUmuyVS55aCowwmZDfOXJ/HPE2SNJecjcdqrgkm+aroqyYSh1KwMJvGv0xS3zBd0lpC1e9sJJ12Ph/pYEm5Bqhagf5D1JEzOU9aJNI1Fac5EP04ZEJacByJNjQkm54Kow3ukpqbRRFUQ2UIEqAqK0NQQjDhLTnR2wxV6bPA0msicd83/UZNmGYJ7lNBNGhK2vVNtke6xWN5l6+GQmjSWTOJqiKhtMnaPQ8ZNjmwgEZaEl3L3uE64y+UMM/WaVMffhepw0l5rV98iDaTXsHUvBPRPwbVPBKTBrC12yjJ/UrGwt3hdvcljIJTv5xo8rZZXe5uH6tJbY7IN3F8KPBtaQv4hUzQdncnNe8NYLoDPkQxNanzlqT9Opgy2/fAZA+PFO9FBXGGUjyXRie8PRk7XGYoFPW+JDmL0F8j3C2DGKbFOfhraJd63ZQAA2lulxoRS1usrzRWviGJGJgy7rGOK54rWPiuijzFSa+dnq8YwLIRR2Wn2TstLTOpHRb3oDSLZrco8IqKvjbaypSow7dNnA7vT5E9dzqOsa9LjwUhv+dvl528P1YY0qADJ8X0Qt0y5mh2VaPw3btxdHD8zU5zbYiBnjpjpStk//XeavhFBBPJblCt34n4kVnbh1PO+aTjtahv0hMr2GqFOST2w/U1lJerwTR4wX9x/PjNMxwYU5JH5/uF56FkOXDg+lE8O+6QEjD0llA8Grg8RBXlUF9rjiCsw3ExpFkdciSAfz/M8LfJoBxSW6WMN1OJJZIl9yaSyTPGszjtZLB+elWkHd2K73PCc6jRRj/s1nnX9Ezu8Ve5ZsR6hR3NrKC6jisepAyhuS8hZo0qKp2qQc3C1hKK0gyTtRS/KdiFN6udBwbGjTf0sFH0g3i6YPOTf3Zy/E96nYGiFcsvxl2zNlpJc5C6ZulE3epI5twJTU8vclR09144l6yYEN0R6AHn7Tqj/WvogzaxtPOkJaJO8U3ujzdGLrHk/Yxtb5s2omSBak/k1xO+nXGLyJDudTj5fi7gzWTQ3rFAAAAAASUVORK5CYII=" class="card-img-top" alt="...">
                                    </img>  <div class="card-body">
                                           <a href="#" class="btn btn-primary">FIT-MCA4</a>
                                            <h5 class="card-title">Ashna</h5>
    
                                        </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <div class="card" >
                                    <img height="200px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAACUCAMAAAAu5KLjAAAAMFBMVEXk5ueutLenrrHn6eqrsbS0ubzb3t+2vL7X2tzh4+S7wMPS1de/xMbCx8nIzM6xt7lOagnvAAADuUlEQVR4nO2b23asIAxAgShXhf//24IzPVNbnQGiQddhP/WteyWTcIuMdTqdTqfT6XQ6nU6n06kCWgt8AACYlFprY9Kf1wSYm1XgCyEor68X1hhFrwYx8BeDENbJKwUVQNvxp+K36RAmeR1PqYYNyYcpt+YSomBmseP4DKm/gCi4rXSvRcf2mZ8/SS6ivq2kmXIso+fcVFPlWUbPqV3ezcef5Q9P28wyO5YPzzbxhCLLVEctPMG/bZdbOHpP0KWSEUmuyVS55aCowwmZDfOXJ/HPE2SNJecjcdqrgkm+aroqyYSh1KwMJvGv0xS3zBd0lpC1e9sJJ12Ph/pYEm5Bqhagf5D1JEzOU9aJNI1Fac5EP04ZEJacByJNjQkm54Kow3ukpqbRRFUQ2UIEqAqK0NQQjDhLTnR2wxV6bPA0msicd83/UZNmGYJ7lNBNGhK2vVNtke6xWN5l6+GQmjSWTOJqiKhtMnaPQ8ZNjmwgEZaEl3L3uE64y+UMM/WaVMffhepw0l5rV98iDaTXsHUvBPRPwbVPBKTBrC12yjJ/UrGwt3hdvcljIJTv5xo8rZZXe5uH6tJbY7IN3F8KPBtaQv4hUzQdncnNe8NYLoDPkQxNanzlqT9Opgy2/fAZA+PFO9FBXGGUjyXRie8PRk7XGYoFPW+JDmL0F8j3C2DGKbFOfhraJd63ZQAA2lulxoRS1usrzRWviGJGJgy7rGOK54rWPiuijzFSa+dnq8YwLIRR2Wn2TstLTOpHRb3oDSLZrco8IqKvjbaypSow7dNnA7vT5E9dzqOsa9LjwUhv+dvl528P1YY0qADJ8X0Qt0y5mh2VaPw3btxdHD8zU5zbYiBnjpjpStk//XeavhFBBPJblCt34n4kVnbh1PO+aTjtahv0hMr2GqFOST2w/U1lJerwTR4wX9x/PjNMxwYU5JH5/uF56FkOXDg+lE8O+6QEjD0llA8Grg8RBXlUF9rjiCsw3ExpFkdciSAfz/M8LfJoBxSW6WMN1OJJZIl9yaSyTPGszjtZLB+elWkHd2K73PCc6jRRj/s1nnX9Ezu8Ve5ZsR6hR3NrKC6jisepAyhuS8hZo0qKp2qQc3C1hKK0gyTtRS/KdiFN6udBwbGjTf0sFH0g3i6YPOTf3Zy/E96nYGiFcsvxl2zNlpJc5C6ZulE3epI5twJTU8vclR09144l6yYEN0R6AHn7Tqj/WvogzaxtPOkJaJO8U3ujzdGLrHk/Yxtb5s2omSBak/k1xO+nXGLyJDudTj5fi7gzWTQ3rFAAAAAASUVORK5CYII=" class="card-img-top" alt="...">
                                    </img>  <div class="card-body">
                                           <a href="#" class="btn btn-primary">FIT-MCA5</a>
                                            <h5 class="card-title">Anson</h5>
    
                                        </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <div class="card" >
                                    <img height="200px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAACUCAMAAAAu5KLjAAAAMFBMVEXk5ueutLenrrHn6eqrsbS0ubzb3t+2vL7X2tzh4+S7wMPS1de/xMbCx8nIzM6xt7lOagnvAAADuUlEQVR4nO2b23asIAxAgShXhf//24IzPVNbnQGiQddhP/WteyWTcIuMdTqdTqfT6XQ6nU6n06kCWgt8AACYlFprY9Kf1wSYm1XgCyEor68X1hhFrwYx8BeDENbJKwUVQNvxp+K36RAmeR1PqYYNyYcpt+YSomBmseP4DKm/gCi4rXSvRcf2mZ8/SS6ivq2kmXIso+fcVFPlWUbPqV3ezcef5Q9P28wyO5YPzzbxhCLLVEctPMG/bZdbOHpP0KWSEUmuyVS55aCowwmZDfOXJ/HPE2SNJecjcdqrgkm+aroqyYSh1KwMJvGv0xS3zBd0lpC1e9sJJ12Ph/pYEm5Bqhagf5D1JEzOU9aJNI1Fac5EP04ZEJacByJNjQkm54Kow3ukpqbRRFUQ2UIEqAqK0NQQjDhLTnR2wxV6bPA0msicd83/UZNmGYJ7lNBNGhK2vVNtke6xWN5l6+GQmjSWTOJqiKhtMnaPQ8ZNjmwgEZaEl3L3uE64y+UMM/WaVMffhepw0l5rV98iDaTXsHUvBPRPwbVPBKTBrC12yjJ/UrGwt3hdvcljIJTv5xo8rZZXe5uH6tJbY7IN3F8KPBtaQv4hUzQdncnNe8NYLoDPkQxNanzlqT9Opgy2/fAZA+PFO9FBXGGUjyXRie8PRk7XGYoFPW+JDmL0F8j3C2DGKbFOfhraJd63ZQAA2lulxoRS1usrzRWviGJGJgy7rGOK54rWPiuijzFSa+dnq8YwLIRR2Wn2TstLTOpHRb3oDSLZrco8IqKvjbaypSow7dNnA7vT5E9dzqOsa9LjwUhv+dvl528P1YY0qADJ8X0Qt0y5mh2VaPw3btxdHD8zU5zbYiBnjpjpStk//XeavhFBBPJblCt34n4kVnbh1PO+aTjtahv0hMr2GqFOST2w/U1lJerwTR4wX9x/PjNMxwYU5JH5/uF56FkOXDg+lE8O+6QEjD0llA8Grg8RBXlUF9rjiCsw3ExpFkdciSAfz/M8LfJoBxSW6WMN1OJJZIl9yaSyTPGszjtZLB+elWkHd2K73PCc6jRRj/s1nnX9Ezu8Ve5ZsR6hR3NrKC6jisepAyhuS8hZo0qKp2qQc3C1hKK0gyTtRS/KdiFN6udBwbGjTf0sFH0g3i6YPOTf3Zy/E96nYGiFcsvxl2zNlpJc5C6ZulE3epI5twJTU8vclR09144l6yYEN0R6AHn7Tqj/WvogzaxtPOkJaJO8U3ujzdGLrHk/Yxtb5s2omSBak/k1xO+nXGLyJDudTj5fi7gzWTQ3rFAAAAAASUVORK5CYII=" class="card-img-top" alt="...">
                                    </img> <div class="card-body">
                                           <a href="#" class="btn btn-primary">FIT-MCA6</a>
                                            <h5 class="card-title">Sini</h5>
    
                                        </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <div class="card" >
                                    <img height="200px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAACUCAMAAAAu5KLjAAAAMFBMVEXk5ueutLenrrHn6eqrsbS0ubzb3t+2vL7X2tzh4+S7wMPS1de/xMbCx8nIzM6xt7lOagnvAAADuUlEQVR4nO2b23asIAxAgShXhf//24IzPVNbnQGiQddhP/WteyWTcIuMdTqdTqfT6XQ6nU6n06kCWgt8AACYlFprY9Kf1wSYm1XgCyEor68X1hhFrwYx8BeDENbJKwUVQNvxp+K36RAmeR1PqYYNyYcpt+YSomBmseP4DKm/gCi4rXSvRcf2mZ8/SS6ivq2kmXIso+fcVFPlWUbPqV3ezcef5Q9P28wyO5YPzzbxhCLLVEctPMG/bZdbOHpP0KWSEUmuyVS55aCowwmZDfOXJ/HPE2SNJecjcdqrgkm+aroqyYSh1KwMJvGv0xS3zBd0lpC1e9sJJ12Ph/pYEm5Bqhagf5D1JEzOU9aJNI1Fac5EP04ZEJacByJNjQkm54Kow3ukpqbRRFUQ2UIEqAqK0NQQjDhLTnR2wxV6bPA0msicd83/UZNmGYJ7lNBNGhK2vVNtke6xWN5l6+GQmjSWTOJqiKhtMnaPQ8ZNjmwgEZaEl3L3uE64y+UMM/WaVMffhepw0l5rV98iDaTXsHUvBPRPwbVPBKTBrC12yjJ/UrGwt3hdvcljIJTv5xo8rZZXe5uH6tJbY7IN3F8KPBtaQv4hUzQdncnNe8NYLoDPkQxNanzlqT9Opgy2/fAZA+PFO9FBXGGUjyXRie8PRk7XGYoFPW+JDmL0F8j3C2DGKbFOfhraJd63ZQAA2lulxoRS1usrzRWviGJGJgy7rGOK54rWPiuijzFSa+dnq8YwLIRR2Wn2TstLTOpHRb3oDSLZrco8IqKvjbaypSow7dNnA7vT5E9dzqOsa9LjwUhv+dvl528P1YY0qADJ8X0Qt0y5mh2VaPw3btxdHD8zU5zbYiBnjpjpStk//XeavhFBBPJblCt34n4kVnbh1PO+aTjtahv0hMr2GqFOST2w/U1lJerwTR4wX9x/PjNMxwYU5JH5/uF56FkOXDg+lE8O+6QEjD0llA8Grg8RBXlUF9rjiCsw3ExpFkdciSAfz/M8LfJoBxSW6WMN1OJJZIl9yaSyTPGszjtZLB+elWkHd2K73PCc6jRRj/s1nnX9Ezu8Ve5ZsR6hR3NrKC6jisepAyhuS8hZo0qKp2qQc3C1hKK0gyTtRS/KdiFN6udBwbGjTf0sFH0g3i6YPOTf3Zy/E96nYGiFcsvxl2zNlpJc5C6ZulE3epI5twJTU8vclR09144l6yYEN0R6AHn7Tqj/WvogzaxtPOkJaJO8U3ujzdGLrHk/Yxtb5s2omSBak/k1xO+nXGLyJDudTj5fi7gzWTQ3rFAAAAAASUVORK5CYII=" class="card-img-top" alt="...">
                                       </img> <div class="card-body">
                                           <a href="#" class="btn btn-primary">FIT-MCA7</a>
                                            <h5 class="card-title">Antony</h5>
    
                                        </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <div class="card" >
                                    <img height="200px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAACUCAMAAAAu5KLjAAAAMFBMVEXk5ueutLenrrHn6eqrsbS0ubzb3t+2vL7X2tzh4+S7wMPS1de/xMbCx8nIzM6xt7lOagnvAAADuUlEQVR4nO2b23asIAxAgShXhf//24IzPVNbnQGiQddhP/WteyWTcIuMdTqdTqfT6XQ6nU6n06kCWgt8AACYlFprY9Kf1wSYm1XgCyEor68X1hhFrwYx8BeDENbJKwUVQNvxp+K36RAmeR1PqYYNyYcpt+YSomBmseP4DKm/gCi4rXSvRcf2mZ8/SS6ivq2kmXIso+fcVFPlWUbPqV3ezcef5Q9P28wyO5YPzzbxhCLLVEctPMG/bZdbOHpP0KWSEUmuyVS55aCowwmZDfOXJ/HPE2SNJecjcdqrgkm+aroqyYSh1KwMJvGv0xS3zBd0lpC1e9sJJ12Ph/pYEm5Bqhagf5D1JEzOU9aJNI1Fac5EP04ZEJacByJNjQkm54Kow3ukpqbRRFUQ2UIEqAqK0NQQjDhLTnR2wxV6bPA0msicd83/UZNmGYJ7lNBNGhK2vVNtke6xWN5l6+GQmjSWTOJqiKhtMnaPQ8ZNjmwgEZaEl3L3uE64y+UMM/WaVMffhepw0l5rV98iDaTXsHUvBPRPwbVPBKTBrC12yjJ/UrGwt3hdvcljIJTv5xo8rZZXe5uH6tJbY7IN3F8KPBtaQv4hUzQdncnNe8NYLoDPkQxNanzlqT9Opgy2/fAZA+PFO9FBXGGUjyXRie8PRk7XGYoFPW+JDmL0F8j3C2DGKbFOfhraJd63ZQAA2lulxoRS1usrzRWviGJGJgy7rGOK54rWPiuijzFSa+dnq8YwLIRR2Wn2TstLTOpHRb3oDSLZrco8IqKvjbaypSow7dNnA7vT5E9dzqOsa9LjwUhv+dvl528P1YY0qADJ8X0Qt0y5mh2VaPw3btxdHD8zU5zbYiBnjpjpStk//XeavhFBBPJblCt34n4kVnbh1PO+aTjtahv0hMr2GqFOST2w/U1lJerwTR4wX9x/PjNMxwYU5JH5/uF56FkOXDg+lE8O+6QEjD0llA8Grg8RBXlUF9rjiCsw3ExpFkdciSAfz/M8LfJoBxSW6WMN1OJJZIl9yaSyTPGszjtZLB+elWkHd2K73PCc6jRRj/s1nnX9Ezu8Ve5ZsR6hR3NrKC6jisepAyhuS8hZo0qKp2qQc3C1hKK0gyTtRS/KdiFN6udBwbGjTf0sFH0g3i6YPOTf3Zy/E96nYGiFcsvxl2zNlpJc5C6ZulE3epI5twJTU8vclR09144l6yYEN0R6AHn7Tqj/WvogzaxtPOkJaJO8U3ujzdGLrHk/Yxtb5s2omSBak/k1xO+nXGLyJDudTj5fi7gzWTQ3rFAAAAAASUVORK5CYII=" class="card-img-top" alt="...">
                                        </img><div class="card-body">
                                           <a href="#" class="btn btn-primary">FIT-MCA8</a>
                                            <h5 class="card-title">Jomol</h5>
    
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewallStudent