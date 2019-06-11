import * as React from 'react'
import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)



function CategoryControl ({value, onChange}) {
  const [lang, setLang] = React.useState('en')
  value = value || { en:'',de:'',mk:'',al:''}

  return (
    <div>
    <div>{lang}</div>
    <input style={{
      display: 'block',
      width: '100%',
      boxShadow: 'none',
      backgroundColor: 'rgb(255, 255, 255)',
      color: 'rgb(68, 74, 87)',
      position: 'relative',
      fontSize: '15px',
      lineHeight: '1.5',
      padding: '16px 20px',
      margin: '0px',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'rgb(223, 223, 227)',
      borderImage: 'initial',
      borderRadius: '0px 5px 5px',
      outline: '0px',
      transition: 'border-color 0.2s ease 0s',
    }} type='text' value={value[lang]} onChange={e => onChange({ ...value, [lang]: e.target.value })} />
    <div>
      <button onClick={() => setLang('en')} children='en'/>
      <button onClick={() => setLang('de')} children='de'/>
      <button onClick={() => setLang('mk')} children='mk'/>
      <button onClick={() => setLang('al')} children='al'/>
    </div>
    </div>
  )
}

CMS.registerWidget('category', CategoryControl)