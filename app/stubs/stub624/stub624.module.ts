import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub624Component} from "./stub624.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub624Component
        }])
    ],
    declarations: [
        Stub624Component
    ]
})
export class Stub624Module {

}
