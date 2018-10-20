import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub22Component} from "./stub22.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub22Component
        }])
    ],
    declarations: [
        Stub22Component
    ]
})
export class Stub22Module {

}
