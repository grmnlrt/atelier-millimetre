[1mdiff --git a/source/layouts/layout.erb b/source/layouts/layout.erb[m
[1mindex df5c772..921b63d 100644[m
[1m--- a/source/layouts/layout.erb[m
[1m+++ b/source/layouts/layout.erb[m
[36m@@ -11,6 +11,7 @@[m
   <body>[m
     <%= partial "components/navbar" %>[m
     <%= yield %>[m
[32m+[m[32m    <%= partial "components/footer" %>[m
     <%= javascript_include_tag "site" %>[m
   </body>[m
 </html>[m
[1mdiff --git a/source/stylesheets/components/_index.scss b/source/stylesheets/components/_index.scss[m
[1mindex a9b0821..e74552b 100644[m
[1m--- a/source/stylesheets/components/_index.scss[m
[1m+++ b/source/stylesheets/components/_index.scss[m
[36m@@ -1,2 +1,3 @@[m
 // Import your components CSS files here.[m
 @import "navbar";[m
[32m+[m[32m@import "footer";[m
[1mdiff --git a/source/stylesheets/components/_navbar.scss b/source/stylesheets/components/_navbar.scss[m
[1mindex c7101b9..a452502 100644[m
[1m--- a/source/stylesheets/components/_navbar.scss[m
[1m+++ b/source/stylesheets/components/_navbar.scss[m
[36m@@ -5,7 +5,7 @@[m
     display: flex;[m
     justify-content: center;[m
     align-items: center;[m
[31m-    @media screen and (max-width: 740px) {[m
[32m+[m[32m    @media screen and (max-width: $breakpoint-sm) {[m
       display: none;[m
     }[m
 [m
[36m@@ -44,13 +44,12 @@[m
   .mobile-content {[m
     display: none;[m
     position: relative;[m
[31m-    @media screen and (max-width: 740px) {[m
[32m+[m[32m    @media screen and (max-width: $breakpoint-sm) {[m
       display: block;[m
     }[m
 [m
     #logo {[m
[31m-      margin: 0;[m
[31m-      margin-left: 18px;[m
[32m+[m[32m      margin: 0 0 0 18px;[m
       img {[m
         width: 60px;[m
       }[m
[1mdiff --git a/source/stylesheets/config/_bootstrap_variables.scss b/source/stylesheets/config/_bootstrap_variables.scss[m
[1mindex 7b6cff4..bda8508 100644[m
[1m--- a/source/stylesheets/config/_bootstrap_variables.scss[m
[1m+++ b/source/stylesheets/config/_bootstrap_variables.scss[m
[36m@@ -9,6 +9,10 @@[m [m$font-family-sans-serif:  $base-font;[m
 // $font-size-base:          $base-size;[m
 // $line-height-base:        $base-height;[m
 $headings-font-family:    $headers-font;[m
[32m+[m[32m$font-size-h1: 32px;[m
[32m+[m[32m$font-size-h2: 24px;[m
[32m+[m[32m$font-size-h3: 20px;[m
[32m+[m[32m$font-size-h4: 16px;[m
 [m
 // Semantic color scheme[m
 $brand-primary:   $green;[m
[36m@@ -27,3 +31,7 @@[m [m$border-radius-small: 2px;[m
 $link-color:            $black;[m
 $link-hover-color:      $green;[m
 $link-hover-decoration: none;[m
[32m+[m
[32m+[m[32m// Breakpoints[m
[32m+[m[32m$breakpoint-sm: 768px;[m
[32m+[m[32m$breakpoint-md: 992px;[m
[1mdiff --git a/source/stylesheets/config/_global.scss b/source/stylesheets/config/_global.scss[m
[1mindex 3d69a7d..23fcffa 100644[m
[1m--- a/source/stylesheets/config/_global.scss[m
[1m+++ b/source/stylesheets/config/_global.scss[m
[36m@@ -8,3 +8,11 @@[m [ma {[m
   font-weight: 400;[m
   transition: color .1s ease;[m
 }[m
[32m+[m
[32m+[m[32m.dot {[m
[32m+[m[32m  background: $green;[m
[32m+[m[32m  height: 4px;[m
[32m+[m[32m  width: 4px;[m
[32m+[m[32m  border-radius: 50%;[m
[32m+[m[32m  margin: 0 10px;[m
[32m+[m[32m}[m
