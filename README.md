# JSON Form to HTML

This is an HTML form component generator built using React and bundled using Vite. 

## Usage
- In the text field, paste or write your json. The standard format is as shown below
```
{
  "fields": [
    {
      "type": "text",
      "name": "firstName",
      "label": "First Name"
    },
    {
      "type": "text",
      "name": "lastName",
      "label": "Last Name"
    },
    {
      "type": "email",
      "name": "email",
      "label": "Email"
    },
    {
      "type": "textarea",
      "name": "message",
      "label": "Message"
    },
    {
      "type": "select",
      "name": "subject",
      "label": "Subject",
      "options": [
        {
          "value": "general",
          "label": "General Inquiry"
        },
        {
          "value": "support",
          "label": "Support"
        },
        {
          "value": "feedback",
          "label": "Feedback"
        }
      ]
    }
  ]
}
```
- Click the "generate" button to view the form component. 
- Click the "copy component" button to copy the generated HTML. By default, it's configured as complete html with tailwind CDN so you can view it, either [online](https://codepen.io) or locally.

## Demo
![](https://raw.githubusercontent.com/5ujan/json-form-react/refs/heads/main/public/json-to-form.gif)

## Try it out
The site is currently hosted at [https://sbaskota.com.np/json-form react](https://www.sbaskota.com.np/json-form-react/)
