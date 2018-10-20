import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub63Component} from "./stub63.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub63Component
        }])
    ],
    declarations: [
        Stub63Component
    ]
})
export class Stub63Module {

}
