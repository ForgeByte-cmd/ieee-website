# IEEE VVITU Student Branch Website

A simple website built with plain HTML, CSS and JavaScript. No frameworks, no installs.

## Folder structure

```
ieee-vvitu-website/
├── index.html                  page content
├── style.css                   colours and layout
├── script.js                   all features + all editable data
├── README.md                   this guide
└── images/
    ├── breaking-code-poster.png   your Breaking Code poster (already added)
    ├── members/                   member photos
    ├── leadership/                team photos
    ├── events/                    event pictures
    ├── gallery/                   gallery photos
    └── logo/                      logos (use only approved IEEE assets)
```

## 1. Run it in VS Code (Live Server)

1. Install **VS Code** and the **Live Server** extension (by Ritwick Dey).
2. Open the `ieee-vvitu-website` folder in VS Code (File > Open Folder).
3. Right-click `index.html` and choose **Open with Live Server**.
4. The site opens in your browser and refreshes every time you save.

## 2. The Breaking Code poster

The poster is already at `images/breaking-code-poster.png`.
To use a better one, save it with the **same file name** in the `images` folder. A larger image (at least 1200 px wide) looks sharper.
It is used twice: as a dark blurred hero background, and as a sharp, unstretched picture on the right.

## 3. Change the event details

In `index.html`, search for `TBA` in the hero section and replace each one with the real date, time, venue and mode. Also edit the `hero-desc` paragraph. In `script.js`, edit the Breaking Code entry in the `events` list.

## 4. Replace sample members with real members

Open `script.js` and find `const members = [`. Each member is one line:

```js
{ name: "Sample Member 02", role: "Chairperson", department: "CSE", year: "4th year",
  bio: "Leads the branch.", photo: "", linkedin: "", github: "" },
```

1. Change the values to the real ones.
2. Put the photo in `images/members/` (for example `ravi.jpg`) and write `photo: "images/members/ravi.jpg"`.
3. Add LinkedIn or GitHub links, or leave them as `""`. The link only appears if you add one.
4. Delete the line to remove a member, or copy a line to add one.
5. If a photo is missing, the card shows the person's initials automatically.

The leadership team works the same way in `const team = [`.
When you add real people, also remove the `sample-ribbon` span in `personCardHTML` and the "Sample" notes in `index.html`.

## 5. Other things to edit

| What | Where in `script.js` |
|---|---|
| Contact email, location, social links | `CONFIG.contact` at the top |
| Events | `const events` |
| Announcements | `const announcements` (remove `sample: true` once real) |
| Gallery photos | `const galleryImages` (put photos in `images/gallery/`, set `src`) |
| Resource links | `const resources` |
| Colours | `:root` at the top of `style.css` |

## 6. What the forms can and cannot do

**Important:** a website made only of HTML, CSS and JavaScript has no server or database, so it **cannot permanently store** registrations or feedback.

Right now (demo mode):
- The forms check all fields and show clear errors.
- A valid submission is **not sent anywhere**. The page says so.
- A copy is kept in *your own browser* so the demo dashboard can show it. Other people cannot see it.

To collect real submissions, put a form service address in `CONFIG` at the top of `script.js`:

```js
registrationEndpoint: "https://formspree.io/f/yourFormId",
feedbackEndpoint: "https://formspree.io/f/anotherFormId",
```

Easy options:
- **Formspree** (formspree.io): create a form, copy its URL. Free plan available. Submissions arrive by email and in a dashboard.
- **Google Sheets with Apps Script**: write a small `doPost` web app that adds a row, deploy it, and paste the URL. You may need to adjust `sendToEndpoint` for it (it is the one function that sends data).
- **Firebase or Supabase**: replace the `fetch` inside `sendToEndpoint` with their save call.

When an endpoint is set, the page shows "success" **only if the server accepted the data**.

## 7. Login and dashboard

The login is a **demo**. It stores a name and email in the browser, with **no password and no security**. It exists so you can see the dashboard (profile, registered events, workshops, announcements). Real login needs a backend such as Firebase Authentication or Supabase Auth.
The site cannot check whether someone has an actual IEEE membership.

## 8. Put the website online

### GitHub Pages (free)
1. Create a repository on github.com and upload all the files (keep the `images` folder).
2. Go to **Settings > Pages**.
3. Under "Branch", choose `main` and `/ (root)`, then Save.
4. After a minute your site is live at `https://your-username.github.io/repository-name/`.

### Vercel (free)
1. Push the folder to GitHub.
2. Sign in at vercel.com and choose **Add New > Project**.
3. Import the repository. No build settings are needed. Click **Deploy**.

## 9. Before you publish: checklist

- [ ] Replace every `TBA` with real event details
- [ ] Replace sample members, team, events, announcements and gallery photos
- [ ] Add the real contact email and social links
- [ ] Connect the registration and feedback endpoints
- [ ] Only use IEEE logos if you have permission (see IEEE brand guidelines)
