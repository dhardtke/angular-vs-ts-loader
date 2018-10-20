import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub852Component} from "./stub852.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub852Component
        }])
    ],
    declarations: [
        Stub852Component
    ]
})
export class Stub852Module {

}
